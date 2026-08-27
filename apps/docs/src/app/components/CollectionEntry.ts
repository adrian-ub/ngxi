import { Component, input } from '@angular/core';
import { CollectionInfo } from '../data';
import { RouterLink } from '@angular/router';
import { SafeHtml } from '../utils/safe-html';

@Component({
  selector: 'CollectionEntry',
  imports: [RouterLink, SafeHtml],
  templateUrl: './CollectionEntry.html',
})
export class CollectionEntry {
  readonly collection = input.required<CollectionInfo>();
}
