import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeTwoIcon],svg[icon-park-exchange-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path stroke="#fff" d="M24 30V36"></svg:path><svg:path stroke="#fff" d="M31 26V36"></svg:path><svg:path stroke="#fff" d="M17 32V36"></svg:path><svg:path stroke="#fff" d="M17 25L22 21L25 24L31 19"></svg:path></svg:g>`,
})
export class IconParkExchangeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
