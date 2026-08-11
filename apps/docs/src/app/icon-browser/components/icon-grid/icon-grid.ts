import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, computed, inject, input, output, viewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import type { IconIndexEntry } from '../../../services/manifest.service';
import { IconSetService } from '../../../services/icon-set.service';

/** Splits entries into fixed-size rows; keeps the partial tail row. */
export function chunkRows<T>(entries: T[], cols: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < entries.length; i += cols) {
    rows.push(entries.slice(i, i + cols));
  }
  return rows;
}

/**
 * Virtualized icon grid rendering each entry as an inline SVG from the
 * collection's client bundle (`/icons/<collection>.icons.json.gz`) — the docs
 * app never imports the icon libraries' Angular components. Every injected
 * string has already passed the trust gate inside `IconSetService.icons()`, so
 * this component only ever renders trusted markup; while the bundle loads
 * cells stay empty and a failed load leaves them empty too (never a broken
 * `<img>` and never raw content).
 */
@Component({
  selector: 'app-icon-grid',
  imports: [ScrollingModule],
  templateUrl: './icon-grid.html',
  styleUrl: './icon-grid.css',
  host: { class: 'block h-full w-full overflow-hidden' },
})
export class IconGrid {
  readonly entries = input<IconIndexEntry[]>([]);
  /** The icon collection (e.g. `lucide`) whose bundle is rendered. */
  readonly collection = input('');
  readonly cols = input(8);
  readonly iconSelect = output<IconIndexEntry>();
  readonly clearSearch = output<void>();

  readonly viewportHeight = input<number | null>(null);
  readonly viewport = viewChild<CdkVirtualScrollViewport>('viewport');

  private readonly iconSetService = inject(IconSetService);
  private readonly sanitizer = inject(DomSanitizer);

  protected get rows(): IconIndexEntry[][] {
    return chunkRows(this.entries(), this.cols());
  }

  /**
   * The collection's icon bundle, loaded once per collection by the service.
   * `undefined` while loading or after a failed (fail-closed) load.
   */
  private readonly bundle = computed<ReadonlyMap<string, string> | undefined>(
    () => {
      const collection = this.collection();
      if (collection === '') {
        return undefined;
      }
      return this.iconSetService.icons(collection)();
    },
  );

  /**
   * The bundle's SVG strings as `SafeHtml`, built once per loaded bundle. All
   * strings already passed the service's trust gate, so this is the only place
   * markup is marked injectable.
   */
  private readonly trustedSvgByCanonical = computed<ReadonlyMap<
    string,
    SafeHtml
  > | null>(() => {
    const bundle = this.bundle();
    if (bundle === undefined) {
      return null;
    }
    const trusted = new Map<string, SafeHtml>();
    for (const [name, svg] of bundle) {
      trusted.set(name, this.sanitizer.bypassSecurityTrustHtml(svg));
    }
    return trusted;
  });

  /**
   * The trusted inline SVG for one entry: aliases resolve to their canonical
   * parent's string (the bundle is keyed by canonical names only). `null`
   * while the bundle is loading, when the load failed, or when the entry's
   * canonical icon is missing from the bundle — never injected content that
   * did not pass the trust gate.
   */
  protected safeSvgFor(entry: IconIndexEntry): SafeHtml | null {
    return (
      this.trustedSvgByCanonical()?.get(entry.aliasOf ?? entry.name) ?? null
    );
  }

  protected trackByRow(_index: number, row: IconIndexEntry[]): string {
    return row.map((entry) => entry.name).join('|');
  }
}
