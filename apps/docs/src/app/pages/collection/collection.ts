import { Component, computed, input, signal } from "@angular/core";
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

  protected readonly filteredIcons = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const names = this.iconData.value()?.icons ? this.iconData.value()!.icons : [];
    if (!q) return names;
    return names.filter((name) => name.toLowerCase().includes(q));
  });

  protected readonly searchCategory = form(categorySearch);
  protected readonly filteredCollections = computed(() => filteredCollections());

  protected readonly selectedIcon = signal<string | null>(null);

  protected openDialog(iconName: string): void {
    this.selectedIcon.set(iconName);
  }
}
