import { computed, signal } from '@angular/core';
import infoJSON from './collections-info.json';
import { Fzf } from 'fzf';
import { type IconifyJSON } from '@iconify/types';

export interface CollectionInfo {
  id: string;
  name: string;
  author?: { name: string; url: string };
  license?: { title: string; url: string };
  url?: string;
  sampleIcons?: string[];
  category?: string;
  palette?: string;
  total?: number;
  prepacked?: IconifyJSON;
  /**
   * The icon set was deprecated and is no longer available
   */
  hidden?: boolean;
  icons: string[];
}

export const collections = infoJSON.map((c) =>
  Object.freeze(c as any as CollectionInfo),
);
export const enabledCollections = computed(() => collections);

export const categories = Array.from(
  new Set(collections.map((i) => i.category).filter((v) => v != null)),
);

export const categorySearch = signal<string>('');

const fzf = new Fzf(collections, {
  casing: 'case-insensitive',
  fuzzy: 'v2',
  selector: (v) => `${v.name} ${v.id} ${v.category} ${v.author}`,
});

export const filteredCollections = computed<CollectionInfo[]>(() => {
  const q = categorySearch();

  if (!q) {
    return enabledCollections();
  }

  try {
    const result = fzf.find(q);

    return result.map((i) => i.item);
  } catch {
    return enabledCollections();
  }
});
