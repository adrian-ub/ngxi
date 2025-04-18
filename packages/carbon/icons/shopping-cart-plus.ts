import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartPlusIcon],svg[carbon-shopping-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonShoppingCartPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
