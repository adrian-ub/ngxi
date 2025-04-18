import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShoppingCartOneIcon],svg[icon-park-outline-shopping-cart-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="20.5" cy="41.5" r="3.5" fill="currentColor"></svg:circle><svg:circle cx="37.5" cy="41.5" r="3.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m5 6l9 6l5 22h20l5-17H25m0 9h16"></svg:path></svg:g>`,
})
export class IconParkOutlineShoppingCartOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
