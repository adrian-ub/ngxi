import {
  Component,
  computed,
  debounced,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ManifestService,
  type SetMeta,
  type IconIndexEntry,
} from '../services/manifest.service';
import {
  IconSetService,
  type SampleSet,
} from '../services/icon-set.service';
import { SeoService } from '../seo/seo.service';
import { IconGrid } from './components/icon-grid/icon-grid';
import { IconDetailDialog } from './components/icon-detail-dialog/icon-detail-dialog';
import { SampleIcon } from './components/sample-icon/sample-icon';

/** One cross-collection search result block: a set plus its matching icons. */
export interface GlobalIconGroup {
  set: SetMeta;
  entries: IconIndexEntry[];
}

/**
 * Shared search + category filter for a naming index, used by both the browse
 * grid and the cross-collection global search. Canonical entries sort before
 * aliases, then alphabetically by name.
 */
function filterEntries(
  index: IconIndexEntry[],
  query: string,
  category = '',
): IconIndexEntry[] {
  const q = query.toLowerCase().trim();
  return index
    .filter((entry) => {
      if (
        category !== '' &&
        entry.categories !== undefined &&
        !entry.categories.includes(category)
      ) {
        return false;
      }
      if (q === '') {
        return true;
      }
      return (
        entry.name.toLowerCase().includes(q) ||
        entry.className.toLowerCase().includes(q) ||
        entry.selectorAttr.toLowerCase().includes(q) ||
        (entry.aliasOf !== undefined && entry.aliasOf.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      const aAlias = a.aliasOf !== undefined ? 1 : 0;
      const bAlias = b.aliasOf !== undefined ? 1 : 0;
      if (aAlias !== bAlias) return aAlias - bAlias;
      return a.name.localeCompare(b.name);
    });
}

@Component({
  selector: 'app-icon-browser',
  imports: [
    CommonModule,
    FormsModule,
    CdkCopyToClipboard,
    IconGrid,
    IconDetailDialog,
    SampleIcon,
  ],
  templateUrl: './icon-browser.html',
  styleUrl: './icon-browser.css',
  host: { class: 'icon-browser block min-h-screen text-foreground font-sans' },
})
export class IconBrowser {
  private readonly manifestService = inject(ManifestService);
  private readonly iconSetService = inject(IconSetService);
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  /**
   * The active collection, bound from the `collection/:collection` route param
   * via `withComponentInputBinding()`. Empty on the landing route.
   */
  readonly collection = input('');

  readonly query = signal('');
  readonly category = signal('');
  readonly license = signal('');
  readonly debouncedQuery = debounced(this.query, 250);
  readonly selectedEntry = signal<IconIndexEntry | null>(null);
  /**
   * The collection the selected entry came from. Tracked alongside
   * `selectedEntry` because the dialog's SVG asset URL needs the collection,
   * which is NOT derivable from `selectedSet()` when the entry was selected
   * from a cross-collection search result (no route collection).
   */
  readonly selectedCollection = signal('');
  readonly isDarkMode = signal(true);
  readonly toastMessage = signal<string | null>(null);
  readonly installCopied = signal(false);

  readonly manifest = this.manifestService.manifestValue;
  readonly sets = computed(() => this.manifest().sets);

  readonly selectedSet = computed<SetMeta | null>(() => {
    const c = this.collection();
    return c === ''
      ? null
      : (this.sets().find((s) => s.collection === c) ?? null);
  });

  readonly browsing = computed(() => this.selectedSet() !== null);

  readonly totalIconsInWorkspace = computed(() => {
    return this.sets().reduce((sum, set) => sum + set.iconCount, 0);
  });

  /**
   * The landing collections grid renders only when idle: not browsing a set
   * and no active search query. Anything else switches to search or browse.
   */
  readonly landingGridVisible = computed(() => {
    return !this.browsing() && this.query().trim() === '';
  });

  readonly availableCategories = computed(() => {
    const all = new Set<string>();
    for (const set of this.sets()) {
      for (const cat of set.categories) {
        all.add(cat);
      }
    }
    return [...all].sort();
  });

  readonly availableLicenses = computed(() => {
    const all = new Set<string>();
    for (const set of this.sets()) {
      all.add(set.license);
    }
    return [...all].sort();
  });

  /**
   * Sets matching the active category/license/query filters — drives the
   * landing grid and the compact "matching collections" row in search mode.
   * Pure and synchronous: no fetches, so it is instant as you type.
   */
  readonly filteredSets = computed(() => {
    const cat = this.category();
    const lic = this.license();
    const q = this.query().toLowerCase().trim();
    return this.sets().filter((set) => {
      if (cat !== '' && !set.categories.includes(cat)) return false;
      if (lic !== '' && set.license !== lic) return false;
      if (q !== '') {
        const haystack =
          `${set.name} ${set.collection} ${set.package}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  });

  /** Returns the validated sample showcase for a set (cached signal read). */
  samplesOf(collection: string): SampleSet | undefined {
    return this.iconSetService.samples(collection)();
  }

  /**
   * The browsed set's lightweight naming index, loaded on demand. The grid
   * derives its filtered view from this alone — the heavy icon bodies are only
   * rendered by the lazy Angular components, never fetched as JSON.
   */
  private readonly browseIndex = computed<IconIndexEntry[] | undefined>(() => {
    const set = this.selectedSet();
    if (!set) return undefined;
    return this.iconSetService.index(set.collection)();
  });

  /** Whether the browsed set ships per-icon categories (not just set-level). */
  private readonly browseHasPerIconCategories = computed(() => {
    const index = this.browseIndex() ?? [];
    return index.some(
      (entry) => Array.isArray(entry.categories) && entry.categories.length > 0,
    );
  });

  readonly filteredIndex = computed(() => {
    const index = this.browseIndex() ?? [];
    return filterEntries(index, this.query(), this.category());
  });

  /**
   * Cross-collection search results, keyed by set. Populated reactively by
   * `globalSearch` once the debounced query settles; stays empty while
   * browsing or when the query is blank.
   */
  readonly globalGroups = signal<GlobalIconGroup[]>([]);

  readonly globalIconCount = computed(() => {
    return this.globalGroups().reduce(
      (sum, group) => sum + group.entries.length,
      0,
    );
  });

  /**
   * The compact "matching collections" row in search mode: collections whose
   * name/collection/package match the query, unioned with collections that
   * have matching icons. Deduplicated, name matches first.
   */
  readonly searchCollectionGroups = computed<SetMeta[]>(() => {
    const byName = this.filteredSets();
    const byIcon = this.globalGroups().map((g) => g.set);
    const seen = new Set<string>();
    const out: SetMeta[] = [];
    for (const set of [...byName, ...byIcon]) {
      if (!seen.has(set.collection)) {
        seen.add(set.collection);
        out.push(set);
      }
    }
    return out;
  });

  /**
   * The copyable install command shown in the header pill.
   */
  readonly installCommand = computed(() => {
    const pkg = this.selectedSet()?.package ?? '@ngxi/<collection>';
    return `pnpm add ${pkg}`;
  });

  constructor() {
    // Keep the filter signals in sync with the URL (back/forward, shared links).
    this.route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.query.set(typeof params['q'] === 'string' ? params['q'] : '');
      this.category.set(
        typeof params['category'] === 'string' ? params['category'] : '',
      );
      this.license.set(
        typeof params['license'] === 'string' ? params['license'] : '',
      );
    });
  }

  /**
   * Mirrors the three filter signals onto the URL as deep-linkable query
   * params. Guarded against the navigation it itself triggers: when the
   * signals already match the current snapshot (e.g. right after a
   * back/forward that the queryParams subscription just replayed), it returns
   * without navigating, so there is no loop.
   */
  private readonly urlMirror = effect(() => {
    const q = this.query();
    const category = this.category();
    const license = this.license();
    const snap = this.route.snapshot.queryParams;
    if (
      q === (snap['q'] ?? '') &&
      category === (snap['category'] ?? '') &&
      license === (snap['license'] ?? '')
    ) {
      return;
    }
    void this.router.navigate([], {
      queryParams: {
        q: q || undefined,
        category: category || undefined,
        license: license || undefined,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  });

  /** Closes any open dialog when the routed collection changes. */
  private readonly routeReset = effect(() => {
    void this.collection();
    this.selectedEntry.set(null);
    this.selectedCollection.set('');
  });

  /**
   * Applies per-page SEO whenever the routed collection or the manifest
   * changes. Reads only signals (collection, manifest-derived set) and writes
   * only to the `<head>` DOM, so it cannot feed back into any state. Runs
   * during SSR prerendering too, so each static page ships its own SEO.
   */
  private readonly seoEffect = effect(() => {
    const set = this.selectedSet();
    if (set === null) {
      this.seo.applyHomePage();
    } else {
      this.seo.applyCollectionPage(set);
    }
  });

  /**
   * Drives the cross-collection search. Re-runs as each set's index signal
   * loads, so groups pop in as their lightweight index fetch settles.
   */
  private readonly globalSearch = effect(() => {
    const q = this.debouncedQuery.value();
    const category = this.category();
    const license = this.license();
    if (this.browsing() || q.trim() === '') {
      this.globalGroups.set([]);
      return;
    }
    const groups: GlobalIconGroup[] = [];
    for (const set of this.sets()) {
      if (category !== '' && !set.categories.includes(category)) continue;
      if (license !== '' && set.license !== license) continue;
      const index = this.iconSetService.index(set.collection)();
      if (index === undefined) continue;
      const entries = filterEntries(index, q, category);
      if (entries.length > 0) {
        groups.push({ set, entries });
      }
    }
    this.globalGroups.set(groups);
  });

  /** Pulsing skeleton placeholders for the sample area before samples load. */
  protected readonly sampleSkeleton = Array.from({ length: 6 }, (_, i) => i);

  onInstallCopied(): void {
    this.installCopied.set(true);
    setTimeout(() => this.installCopied.set(false), 1500);
  }

  openSet(set: SetMeta): void {
    this.selectedEntry.set(null);
    this.selectedCollection.set('');
    void this.router.navigate(['/collection', set.collection]);
  }

  backToCollections(): void {
    this.query.set('');
    this.category.set('');
    this.license.set('');
    this.selectedEntry.set(null);
    this.selectedCollection.set('');
    void this.router.navigate(['/']);
  }

  goHome(): void {
    this.backToCollections();
  }

  clearFilters(): void {
    this.query.set('');
    this.category.set('');
    this.license.set('');
  }

  onSetChange(collection: string): void {
    this.selectedEntry.set(null);
    this.selectedCollection.set('');
    if (collection === '') {
      void this.router.navigate(['/']);
    } else {
      void this.router.navigate(['/collection', collection]);
    }
  }

  onCategoryChange(value: string): void {
    this.category.set(value);
    if (this.browsing() && !this.browseHasPerIconCategories()) {
      // Set-level association: the category belongs to the landing, not the
      // per-icon grid, so bounce to a landing filtered by that category.
      void this.router.navigate(['/']);
    }
  }

  onLicenseChange(value: string): void {
    this.license.set(value);
    if (this.browsing()) {
      // License is set-level; apply it on the landing instead.
      void this.router.navigate(['/']);
    }
  }

  onIconSelect(entry: IconIndexEntry, collection: string): void {
    this.selectedEntry.set(entry);
    this.selectedCollection.set(collection);
  }

  onDialogClose(): void {
    this.selectedEntry.set(null);
    this.selectedCollection.set('');
  }

  toggleTheme(): void {
    this.isDarkMode.update((dark) => !dark);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 2500);
  }

  /**
   * Mirrors `isDarkMode` onto the <html> element and persists it. On its first
   * browser run it adopts the class state the index.html bootstrap script
   * already applied from localStorage, so a stored light preference survives
   * hydration instead of being clobbered by the SSR default (dark).
   */
  private themeAdopted = false;
  private readonly themeEffect = effect(() => {
    if (typeof document === 'undefined') return;
    const dark = this.isDarkMode();
    if (!this.themeAdopted) {
      this.themeAdopted = true;
      const applied = document.documentElement.classList.contains('dark');
      if (dark !== applied) {
        this.isDarkMode.set(applied);
        return;
      }
    }
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('ngxi-theme', dark ? 'dark' : 'light');
    } catch {
      // ignore storage failures (private mode / disabled cookies)
    }
  });
}
