import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChafingDishOneIcon],svg[icon-park-chafing-dish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 18H42V24C42 27.3137 39.3137 30 36 30H12C8.68629 30 6 27.3137 6 24V18Z"></svg:path><svg:path d="M40 42H8"></svg:path><svg:path d="M13 42L16 30"></svg:path><svg:path d="M35 42L32 30"></svg:path><svg:path d="M30 18L27 4H21L18 18"></svg:path><svg:path d="M36 11H40"></svg:path><svg:path d="M8 11H12"></svg:path></svg:g>`,
})
export class IconParkChafingDishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
