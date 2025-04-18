import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsShoppingCartIcon],svg[zondicons-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5L2 2H0V0h3a1 1 0 0 1 1 1zm1 18a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class ZondiconsShoppingCartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
