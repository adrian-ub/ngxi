import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import type { IconIndexEntry } from '../../../services/manifest.service';
import { IconSetService } from '../../../services/icon-set.service';

@Component({
  selector: 'app-icon-detail-dialog',
  imports: [CommonModule, CdkCopyToClipboard],
  templateUrl: './icon-detail-dialog.html',
  styleUrl: './icon-detail-dialog.css',
  host: {
    class:
      'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in',
  },
})
export class IconDetailDialog {
  readonly entry = input.required<IconIndexEntry>();
  /**
   * The icon's collection, e.g. `lucide`. Selects the collection's client
   * bundle (`/icons/<collection>.icons.json.gz`) the SVG is resolved from.
   */
  readonly collection = input.required<string>();
  readonly closeDialog = output<void>();

  private readonly iconSetService = inject(IconSetService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly packageManager = signal<'pnpm' | 'npm' | 'yarn' | 'bun'>('pnpm');
  readonly previewSize = signal<number>(48);
  readonly previewColor = signal<string>('currentColor');
  readonly copiedField = signal<string | null>(null);

  readonly availableSizes = [24, 32, 48, 64, 96];
  readonly availableColors = [
    { label: 'Default', value: 'currentColor' },
    { label: 'Sky', value: '#38bdf8' },
    { label: 'Emerald', value: '#10b981' },
    { label: 'Amber', value: '#f59e0b' },
    { label: 'Rose', value: '#f43f5e' },
    { label: 'Purple', value: '#c084fc' },
  ];

  readonly installSnippet = computed(() => {
    const entry = this.entry();
    const pkgName = entry.importFrom.startsWith('@')
      ? entry.importFrom
      : entry.importFrom.replace('/icons/', '@');
    const pm = this.packageManager();
    switch (pm) {
      case 'npm':
        return `npm i ${pkgName}`;
      case 'yarn':
        return `yarn add ${pkgName}`;
      case 'bun':
        return `bun add ${pkgName}`;
      case 'pnpm':
      default:
        return `pnpm add ${pkgName}`;
    }
  });

  readonly importSnippet = computed(() => {
    const entry = this.entry();
    return `import { ${entry.className} } from '${entry.importFrom}';`;
  });

  readonly templateSnippet = computed(() => {
    const entry = this.entry();
    return `<svg ${entry.selectorAttr}></svg>`;
  });

  readonly componentImportSnippet = computed(() => {
    const entry = this.entry();
    return `@Component({\n  imports: [${entry.className}],\n  template: \`<svg ${entry.selectorAttr}></svg>\`,\n})\nexport class MyComponent {}`;
  });

  /**
   * The full standalone `<svg>` document for the selected icon, resolved from
   * the collection's client bundle (alias entries resolve to their canonical
   * parent's entry). Every string in the bundle already passed the
   * `IconSetService` trust gate, which fails closed on invalid markup.
   * `undefined` while the bundle is pending, when its load failed, or when the
   * canonical icon is missing from it.
   */
  protected readonly svgText = computed<string | undefined>(() => {
    const entry = this.entry();
    const collection = this.collection();
    const canonical = entry.aliasOf ?? entry.name;
    return this.iconSetService.icons(collection)()?.get(canonical);
  });

  /**
   * The raw SVG markup of the selected icon, copied verbatim. Falls back to
   * '' while the asset is still loading or unavailable.
   */
  readonly rawSvgSnippet = computed(() => this.svgText() ?? '');

  /** The raw SVG rendered as trusted inline markup, null while unavailable. */
  protected readonly safePreview = computed<SafeHtml | null>(() => {
    const svg = this.svgText();
    return svg ? this.sanitizer.bypassSecurityTrustHtml(svg) : null;
  });

  onCopy(fieldName: string): void {
    this.copiedField.set(fieldName);
    setTimeout(() => {
      if (this.copiedField() === fieldName) {
        this.copiedField.set(null);
      }
    }, 2000);
  }

  onClose(): void {
    this.closeDialog.emit();
  }
}
