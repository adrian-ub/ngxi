import {
  Component,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  signal,
} from "@angular/core";
import { isPlatformServer } from '@angular/common';
import { RouterLink } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';
import { httpResource } from "@angular/common/http";

import { collections, filteredCollections, categorySearch, CollectionInfo } from '../../data';
import { Icon } from '../../components/icon/Icon';
import { Navbar } from '../../components/Navbar';
import { Searchbar } from '../../components/Searchbar';
import { InstallPill } from '../../components/install-pill/install-pill';
import { IconDetailDialog } from '../../components/icon-detail-dialog/icon-detail-dialog';
import { Footer } from '../../components/Footer';
import { InfiniteScroll } from '../../directives/infinite-scroll.directive';
import { IconBody, loadCollectionChunk } from '../../data/load-collection';

/** Grid page size — must match CHUNK_SIZE in scripts/prepare.ts. */
const PAGE_SIZE = 500;


@Component({
  imports: [
    RouterLink,
    Icon,
    Navbar,
    Searchbar,
    InstallPill,
    IconDetailDialog,
    Footer,
    FormField,
    InfiniteScroll,
  ],
  templateUrl: './collection.html',
})
export default class CollectionPage {
  readonly collection = input.required<string>();

  protected readonly collectionInfo = computed(
    () => collections.find((c) => c.id === this.collection()) ?? null,
  );

  protected readonly iconData = httpResource<CollectionInfo>(() => `/collections/${this.collection()}-meta.json`);

  protected readonly searchQuery = signal('');
  protected readonly searchField = form(this.searchQuery);

  private readonly loadedChunks = signal(0);
  protected readonly iconBodies = signal<Map<string, IconBody>>(new Map());
  protected readonly loadingMore = signal(false);

  protected readonly filteredIcons = computed(() => {
    const data = this.iconData.value();
    // Ignore stale metadata from the previously selected collection while the
    // new one is still loading (httpResource keeps the old value on change).
    if (!data || data.id !== this.collection()) {
      return [];
    }
    const q = this.searchQuery().toLowerCase().trim();
    const names = data.icons ? data.icons : [];
    if (!q) return names;
    return names.filter((name) => name.toLowerCase().includes(q));
  });

  /** Icons whose body is already in memory — the only ones the grid renders. */
  protected readonly visibleIcons = computed(() =>
    this.filteredIcons().filter((name) => this.iconBodies().has(name)),
  );

  /** True when more names exist that have not been loaded into memory yet. */
  protected readonly hasMore = computed(
    () => this.visibleIcons().length < this.filteredIcons().length,
  );

  /**
   * True while there is nothing to draw yet: the icon-name list is still
   * loading, or the first body chunk has not arrived. Once the first chunk is
   * in memory the grid renders, letting the `@empty` branch report a genuine
   * "no icons found" instead of a false negative.
   */
  protected readonly isGridLoading = computed(
    () => this.iconData.isLoading() || (this.iconBodies().size === 0 && this.hasMore()),
  );

  protected readonly searchCategory = form(categorySearch);
  protected readonly filteredCollections = computed(() => filteredCollections());

  protected readonly selectedIcon = signal<string | null>(null);

  protected openDialog(iconName: string): void {
    this.selectedIcon.set(iconName);
  }

  /** Load the next page of icon bodies from its gzip chunk into memory. */
  protected async loadMore(): Promise<void> {
    const meta = this.iconData.value();
    if (
      !meta ||
      meta.id !== this.collection() ||
      this.loadingMore()
    ) {
      return;
    }

    const chunkIndex = this.loadedChunks();
    if (chunkIndex * PAGE_SIZE >= meta.icons.length) {
      return;
    }

    this.loadingMore.set(true);
    try {
      const chunk = await loadCollectionChunk(this.collection(), chunkIndex);
      const merged = new Map(this.iconBodies());
      const fallbackW = chunk.width;
      const fallbackH = chunk.height;
      for (const [name, body] of Object.entries(chunk.icons)) {
        merged.set(name, {
          body: body.body,
          width: body.width ?? fallbackW,
          height: body.height ?? fallbackH,
        });
      }
      this.iconBodies.set(merged);
      this.loadedChunks.set(chunkIndex + 1);
    } finally {
      this.loadingMore.set(false);
    }
  }

  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Reset the grid when the selected collection changes, so the next
   * collection never shows the previous one's bodies. Component instances are
   * reused across routes, so per-collection state must be cleared here.
   */
  private readonly resetOnCollectionChange = effect(() => {
    const id = this.collection();
    // Reading `id` above ties this effect to collection changes.
    this.iconBodies.set(new Map());
    this.loadedChunks.set(0);
    this.loadingMore.set(false);
    this.selectedIcon.set(null);
    void id;
  });

  /**
   * Auto-load the first grid chunk as soon as the icon-name list arrives. Runs
   * only in the browser (server guard), so the static/prerender output never
   * performs a relative fetch. Re-runs until the names are present.
   */
  private readonly autoLoadFirstChunk = effect(() => {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const meta = this.iconData.value();
    if (
      meta &&
      meta.id === this.collection() &&
      meta.icons.length > 0 &&
      this.iconBodies().size === 0
    ) {
      void this.loadMore();
    }
  });
}
