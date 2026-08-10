import { Component, computed, inject, input, type Signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import {
  type TrustedIconBody,
  trustIconBody,
} from '../../../services/trusted-icon-body';

@Component({
  selector: 'app-icon-svg',
  imports: [],
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      role="img"
      aria-hidden="true"
      focusable="false"
      class="icon-svg"
      [innerHTML]="safeBody()"
    ></svg>
  `,
  styleUrl: './icon-svg.css',
  host: { class: 'icon-svg-host' },
})
export class IconSvg {
  readonly entry = input.required<IconIndexEntry>();
  readonly bundle = input<IconSetBundle | undefined>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly viewBox = computed(
    () => this.bundle()?.viewBox ?? '0 0 24 24',
  );

  /**
   * Resolves the trusted body for the entry (following aliases) and sanitizes
   * it for innerHTML injection. This is the SOLE site where
   * `bypassSecurityTrustHtml` is called in the entire docs app.
   */
  protected readonly safeBody = computed<SafeHtml | null>(
    (): SafeHtml | null => {
      const bundle = this.bundle();
      if (!bundle) return null;

      const entryName = this.entry().name;
      const direct = bundle.bodies.get(entryName);
      if (direct) return this.sanitizer.bypassSecurityTrustHtml(direct);

      const parent = bundle.aliases.get(entryName);
      if (parent) {
        const parentBody = bundle.bodies.get(parent);
        if (parentBody)
          return this.sanitizer.bypassSecurityTrustHtml(parentBody);
      }
      return null;
    },
  );

  /**
   * Static helper for tests: validates and brands a body without rendering.
   * Returns the branded body or null if untrusted.
   */
  static validateBody(body: string): TrustedIconBody | null {
    return trustIconBody(body);
  }
}
