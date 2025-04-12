import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileArchiveIcon],svg[lucide-file-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"></svg:path><svg:circle cx="10" cy="20" r="2"></svg:circle></svg:g>`
})
export class LucideFileArchiveIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
