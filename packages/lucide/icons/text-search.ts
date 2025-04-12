import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextSearchIcon],svg[lucide-text-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 6H3m7 6H3m7 6H3"></svg:path><svg:circle cx="17" cy="15" r="3"></svg:circle><svg:path d="m21 19l-1.9-1.9"></svg:path></svg:g>`
})
export class LucideTextSearchIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
