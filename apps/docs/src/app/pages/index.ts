import { Component, computed } from '@angular/core';

import {
  categories,
  filteredCollections,
  collections,
  categorySearch,
} from '../data';
import { Searchbar } from '../components/Searchbar';
import { InstallPill } from '../components/install-pill/install-pill';
import { CollectionEntries } from '../components/CollectionEntries';
import { Navbar } from '../components/Navbar';
import { form, FormField } from '@angular/forms/signals';
import { Footer } from '../components/Footer';

@Component({
  imports: [Searchbar, InstallPill, CollectionEntries, Navbar, FormField, Footer],
  templateUrl: './index.html',
})
export default class IndexPage {
  protected searchCategory = form(categorySearch);
  protected readonly categorized = computed(() =>
    this.getIconList(categorySearch()),
  );
  protected readonly availableCategories = computed(() =>
    this.categorized().filter((c) => c.collections.length > 0),
  );

  protected readonly totalIcons = computed(() =>
    collections.reduce((sum, collection) => sum + (collection.total ?? 0), 0),
  );
  protected readonly setCount = computed(() => collections.length);

  private getIconList(searchString: string) {
    if (searchString) {
      return [
        {
          name: 'Result',
          type: 'result',
          collections: filteredCollections(),
        },
      ];
    }

    return [
      ...categories.map((category) => ({
        name: category,
        collections: filteredCollections().filter(
          (collection) => collection.category === category,
        ),
      })),
    ];
  }
}
