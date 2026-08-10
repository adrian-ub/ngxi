import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { Component, computed, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import { DynamicIcon } from '../dynamic-icon/dynamic-icon';

@Component({
  selector: 'app-icon-detail-dialog',
  imports: [CommonModule, CdkCopyToClipboard, DynamicIcon],
  templateUrl: './icon-detail-dialog.html',
  styleUrl: './icon-detail-dialog.css',
  host: {
    class:
      'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in',
  },
})
export class IconDetailDialog {
  readonly entry = input.required<IconIndexEntry>();
  readonly bundle = input<IconSetBundle | undefined>();
  readonly closeDialog = output<void>();

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

  readonly rawSvgSnippet = computed(() => {
    const bundle = this.bundle();
    if (!bundle) return '';
    const entryName = this.entry().name;
    let body = bundle.bodies.get(entryName);
    if (!body) {
      const parent = bundle.aliases.get(entryName);
      if (parent) {
        body = bundle.bodies.get(parent);
      }
    }
    if (!body) return '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bundle.viewBox}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
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
