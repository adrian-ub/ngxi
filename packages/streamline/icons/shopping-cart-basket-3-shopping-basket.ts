import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCartBasket3ShoppingBasketIcon],svg[streamline-shopping-cart-basket-3-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.36 6.62a1 1 0 0 0-.24-.78a1 1 0 0 0-.75-.34H1.63a1 1 0 0 0-.75.34a1 1 0 0 0-.24.78l.75 6a1 1 0 0 0 1 .88h9.24a1 1 0 0 0 1-.88ZM2.5 5.5V5a4.5 4.5 0 0 1 9 0v.5M5 8.5v2m4-2v2"></svg:path>`,
})
export class StreamlineShoppingCartBasket3ShoppingBasketIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
