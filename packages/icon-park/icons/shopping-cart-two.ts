import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartTwoIcon],svg[icon-park-shopping-cart-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7H11L18 24H35.5L43 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 12L33 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 6V18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 24L14 30H40"></svg:path><svg:circle cx="19" cy="39" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="35" cy="39" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkShoppingCartTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
