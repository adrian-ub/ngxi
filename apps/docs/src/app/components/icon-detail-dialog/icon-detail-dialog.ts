import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import {
  Component,
  computed,
  inject,
  input,
  output,
  resource,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { loadCollection, deriveIconEntry } from '../../data/load-collection';
import type { IconifyJSON } from '@iconify/types';

/**
 * Extracts the full SVG string for a single icon from IconifyJSON data.
 * Returns `undefined` when the icon is not found.
 */
function extractSvg(data: IconifyJSON, iconName: string): string | undefined {
  const icon = data.icons[iconName];
  if (!icon) return undefined;
  const width = icon.width ?? data.width ?? 24;
  const height = icon.height ?? data.height ?? 24;
  const iconViewBox = (icon as { viewBox?: [number, number, number, number] })
    .viewBox;
  const viewBox = iconViewBox?.join(' ') ?? `0 0 ${width} ${height}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">${icon.body}</svg>`;
}

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
  /** The icon name, e.g. `search`. */
  readonly iconName = input.required<string>();
  /**
   * The icon's collection, e.g. `lucide`. Selects the collection's
   * IconifyJSON data the SVG is resolved from.
   */
  readonly collection = input.required<string>();
  readonly closeDialog = output<void>();

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
    if (!entry) return '';
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
    if (!entry) return '';
    return `import { ${entry.className} } from '${entry.importFrom}';`;
  });

  readonly templateSnippet = computed(() => {
    const entry = this.entry();
    if (!entry) return '';
    return `<svg ${entry.selectorAttr}></svg>`;
  });

  readonly componentImportSnippet = computed(() => {
    const entry = this.entry();
    if (!entry) return '';
    return `@Component({\n  imports: [${entry.className}],\n  template: \`<svg ${entry.selectorAttr}></svg>\`,\n})\nexport class MyComponent {}`;
  });

  /** Loads the full IconifyJSON for the current collection on demand. */
  private readonly collectionData = resource({
    params: () => ({ collection: this.collection() }),
    loader: async ({ params }) => {
      return loadCollection(params.collection);
    },
  });

  /** Derives the icon entry from the loaded collection data. */
  protected readonly entry = computed(() => {
    const iconName = this.iconName();
    const data = this.collectionData.value();
    if (!iconName || !data) return null;
    return deriveIconEntry(this.collection(), iconName, data);
  });

  /**
   * The full standalone `<svg>` document for the selected icon, resolved from
   * the collection's IconifyJSON data (alias entries resolve to their canonical
   * parent's entry). `undefined` while the data is pending, when its load
   * failed, or when the canonical icon is missing from it.
   */
  protected readonly svgText = computed<string | undefined>(() => {
    const entry = this.entry();
    const data = this.collectionData.value();
    if (!entry || !data) return undefined;
    const canonical = entry.aliasOf ?? entry.name;
    return extractSvg(data, canonical);
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
