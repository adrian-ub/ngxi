import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeOneIcon],svg[icon-park-exchange-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path stroke="#fff" d="M17 24L31 24"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M31 24L26 19"></svg:path><svg:path stroke="#fff" d="M22 35L17 30"></svg:path></svg:g>`,
})
export class IconParkExchangeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
