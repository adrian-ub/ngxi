import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartDelIcon],svg[icon-park-shopping-cart-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M39 32H13L8 12H44L39 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22H30"></svg:path></svg:g>`,
})
export class IconParkShoppingCartDelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
