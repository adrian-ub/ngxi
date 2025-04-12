import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSearchIcon],svg[lucide-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2v4a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m5 11l-1.5-1.5"></svg:path><svg:circle cx="5" cy="14" r="3"></svg:circle></svg:g>`
})
export class LucideFileSearchIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
