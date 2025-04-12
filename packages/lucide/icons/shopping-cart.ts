import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideShoppingCartIcon],svg[lucide-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="21" r="1"></svg:circle><svg:circle cx="19" cy="21" r="1"></svg:circle><svg:path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></svg:path></svg:g>`
})
export class LucideShoppingCartIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
