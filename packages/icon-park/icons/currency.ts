import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCurrencyIcon],svg[icon-park-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 16L24 22L29 16"></svg:path><svg:path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path d="M42 8V24"></svg:path><svg:path d="M6 24L6 40"></svg:path><svg:path d="M18 28H30"></svg:path><svg:path d="M18 22H30"></svg:path><svg:path d="M24 22V34"></svg:path></svg:g>`,
})
export class IconParkCurrencyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
