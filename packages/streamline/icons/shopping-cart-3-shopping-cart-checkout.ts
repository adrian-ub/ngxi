import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart3ShoppingCartCheckoutIcon],svg[streamline-shopping-cart-3-shopping-cart-checkout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.75 4.5l.25 1m3.25-1L7 5.5m-5.18 2H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"></svg:path><svg:circle cx="3.5" cy="13" r=".5"></svg:circle><svg:circle cx="8.5" cy="13" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCart3ShoppingCartCheckoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
