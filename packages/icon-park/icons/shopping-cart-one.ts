import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartOneIcon],svg[icon-park-shopping-cart-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="20.5" cy="41.5" r="3.5" fill="#000"></svg:circle><svg:circle cx="37.5" cy="41.5" r="3.5" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 6L14 12L19 34H39L44 17H25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 26L32.2727 26L41 26"></svg:path></svg:g>`,
})
export class IconParkShoppingCartOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
