import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMayaIcon],svg[icon-park-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="8" x="4" y="34" stroke-linejoin="round"></svg:rect><svg:rect width="34" height="7" x="7" y="27" stroke-linejoin="round"></svg:rect><svg:rect width="28" height="6" x="10" y="21" stroke-linejoin="round"></svg:rect><svg:rect width="22" height="6" x="13" y="15" stroke-linejoin="round"></svg:rect><svg:rect width="8" height="8" x="20" y="7" stroke-linejoin="round"></svg:rect><svg:path d="M20 15L14 42"></svg:path><svg:path d="M28 15L34 42"></svg:path></svg:g>`,
})
export class IconParkMayaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
