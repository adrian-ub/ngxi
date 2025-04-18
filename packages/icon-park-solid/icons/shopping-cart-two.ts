import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingCartTwoIcon],svg[icon-park-solid-shopping-cart-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26"></svg:path><svg:circle cx="19" cy="39" r="3" fill="currentColor"></svg:circle><svg:circle cx="35" cy="39" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidShoppingCartTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
