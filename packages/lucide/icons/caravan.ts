import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCaravanIcon],svg[lucide-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"></svg:path><svg:path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2m20 4v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"></svg:path><svg:circle cx="8" cy="19" r="2"></svg:circle></svg:g>`
})
export class LucideCaravanIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
