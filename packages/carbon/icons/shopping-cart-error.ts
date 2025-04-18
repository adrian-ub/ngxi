import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartErrorIcon],svg[carbon-shopping-cart-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M17 2a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6m0 2a3.95 3.95 0 0 1 2.019.567l-5.452 5.452A3.95 3.95 0 0 1 13 8a4.005 4.005 0 0 1 4-4m0 8a3.95 3.95 0 0 1-2.019-.567l5.452-5.452A3.95 3.95 0 0 1 21 8a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonShoppingCartErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
