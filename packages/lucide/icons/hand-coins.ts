import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideHandCoinsIcon],svg[lucide-hand-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></svg:path><svg:path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></svg:path><svg:circle cx="16" cy="9" r="2.9"></svg:circle><svg:circle cx="6" cy="5" r="3"></svg:circle></svg:g>`
})
export class LucideHandCoinsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
