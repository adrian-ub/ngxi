import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
  signal,
  untracked,
  ViewContainerRef,
  viewChild,
  type ComponentRef,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import { IconLoaderService } from '../../services/icon-loader.service';

@Component({
  selector: 'app-dynamic-icon',
  imports: [],
  template: `
    <div
      class="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
    >
      <ng-template #container></ng-template>
      @if (!componentRef() && safeFallbackBody(); as body) {
        <svg
          [attr.viewBox]="viewBox()"
          role="img"
          aria-hidden="true"
          focusable="false"
          class="w-full h-full"
          [innerHTML]="body"
        ></svg>
      }
    </div>
  `,
  styleUrl: './dynamic-icon.css',
  host: { class: 'block w-full h-full' },
})
export class DynamicIcon implements OnDestroy {
  readonly entry = input.required<IconIndexEntry>();
  readonly bundle = input<IconSetBundle | undefined>();
  readonly inputs = input<Record<string, unknown>>({});

  private readonly loader = inject(IconLoaderService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly container = viewChild.required('container', {
    read: ViewContainerRef,
  });

  protected readonly componentRef = signal<ComponentRef<unknown> | null>(null);

  protected readonly viewBox = computed(
    () => this.bundle()?.viewBox ?? '0 0 24 24',
  );

  protected readonly safeFallbackBody = computed<SafeHtml | null>(() => {
    const bundle = this.bundle();
    if (!bundle) return null;
    const entryName = this.entry().name;
    let body = bundle.bodies.get(entryName);
    if (!body) {
      const parent = bundle.aliases.get(entryName);
      if (parent) {
        body = bundle.bodies.get(parent);
      }
    }
    return body ? this.sanitizer.bypassSecurityTrustHtml(body) : null;
  });

  /**
   * Monotonic id per creation run. Each effect run increments it, so an
   * in-flight `createIconComponent` that resolves after a newer run has
   * started can be discarded instead of leaving a duplicate icon in the
   * container.
   */
  private creationRun = 0;

  constructor() {
    effect(async () => {
      const entry = this.entry();
      // `inputs` is static config, not a reactive trigger: call sites pass a
      // fresh object literal on every change detection, so reading it tracked
      // would destroy and recreate the icon on every CD (and flash the
      // fallback svg while the async creation is in flight).
      const customInputs = untracked(() => this.inputs());
      const vcr = this.container();

      const run = ++this.creationRun;

      // Read the current ref untracked: `componentRef` is written by this
      // effect itself, so tracking it here would re-trigger the effect on
      // every set (destroy/recreate loop).
      const currentRef = untracked(() => this.componentRef());
      if (currentRef) {
        currentRef.destroy();
        this.componentRef.set(null);
      }

      vcr.clear();

      try {
        const ref = await this.loader.createIconComponent(
          vcr,
          entry.importFrom,
          entry.className,
          {
            width: '100%',
            height: '100%',
            ...customInputs,
          },
        );
        // A newer run superseded this one: drop the stale component so the
        // container never holds two icons at once.
        if (run !== this.creationRun) {
          if (ref && !ref.hostView.destroyed) {
            ref.destroy();
          }
          return;
        }
        this.componentRef.set(ref);
      } catch {
        // Fallback SVG renders via template if component loading fails
      }
    });
  }

  ngOnDestroy(): void {
    const currentRef = this.componentRef();
    if (currentRef) {
      currentRef.destroy();
    }
  }
}
