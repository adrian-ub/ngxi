import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingBagIcon],svg[icon-park-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 17H43L38.8 43H9.2L5 17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 17C35 10.3726 30.0751 5 24 5C17.9249 5 13 10.3726 13 17"></svg:path><svg:circle cx="17" cy="26" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33C18 33 20 36 24 36C28 36 30 33 30 33"></svg:path><svg:circle cx="31" cy="26" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkShoppingBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
