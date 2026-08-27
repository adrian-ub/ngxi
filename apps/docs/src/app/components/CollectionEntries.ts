import { Component, input } from '@angular/core';
import { CollectionInfo } from '../data';
import { CollectionEntry } from './CollectionEntry';

@Component({
  selector: 'CollectionEntries',
  imports: [CollectionEntry],
  host: {
    class:
      'grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] overflow-hidden divide-x divide-y *:border-r *:border-b border-t border-l border-border',
  },
  templateUrl: './CollectionEntries.html',
})
export class CollectionEntries {
  readonly collections = input<CollectionInfo[]>([]);
}
