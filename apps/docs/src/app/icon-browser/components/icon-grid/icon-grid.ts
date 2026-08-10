import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, input, output, viewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import { DynamicIcon } from '../dynamic-icon/dynamic-icon';

/** Splits entries into fixed-size rows; keeps the partial tail row. */
export function chunkRows<T>(entries: T[], cols: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < entries.length; i += cols) {
    rows.push(entries.slice(i, i + cols));
  }
  return rows;
}

/**
 * Virtualized icon grid rendering the actual Angular component directives.
 */
@Component({
  selector: 'app-icon-grid',
  imports: [ScrollingModule, DynamicIcon],
  templateUrl: './icon-grid.html',
  styleUrl: './icon-grid.css',
  host: { class: 'block h-full w-full overflow-hidden' },
})
export class IconGrid {
  readonly entries = input<IconIndexEntry[]>([]);
  readonly bundle = input<IconSetBundle | undefined>();
  readonly cols = input(8);
  readonly iconSelect = output<IconIndexEntry>();
  readonly clearSearch = output<void>();

  readonly viewportHeight = input<number | null>(null);
  readonly viewport = viewChild<CdkVirtualScrollViewport>('viewport');

  protected get rows(): IconIndexEntry[][] {
    return chunkRows(this.entries(), this.cols());
  }

  protected trackByRow(_index: number, row: IconIndexEntry[]): string {
    return row.map((entry) => entry.name).join('|');
  }
}
