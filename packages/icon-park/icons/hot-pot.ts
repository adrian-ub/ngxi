import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHotPotIcon],svg[icon-park-hot-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M24 11V4"></svg:path><svg:path stroke="#000" d="M32 11L32 7"></svg:path><svg:path stroke="#000" d="M16 11L16 7"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 17H4C4 22.5856 7.57778 27.5028 13 30.3648C16.1558 32.0305 19.9364 33 24 33C28.0636 33 31.8442 32.0305 35 30.3648C40.4222 27.5028 44 22.5856 44 17Z"></svg:path><svg:path stroke="#000" d="M10.4668 39H37.5332"></svg:path><svg:path stroke="#000" d="M13 30.3647L9 44"></svg:path><svg:path stroke="#000" d="M35 30.3647L39 44"></svg:path><svg:path stroke="#fff" d="M20 25H28"></svg:path></svg:g>`,
})
export class IconParkHotPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
