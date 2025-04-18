import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRippleIcon],svg[icon-park-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 36C4 36 9 33 14 33C21.2976 33 26.7024 39 34 39C39 39 44 36 44 36"></svg:path><svg:path d="M4 24C4 24 9 21 14 21C21.2976 21 26.7024 27 34 27C39 27 44 24 44 24"></svg:path><svg:path d="M4 12C4 12 9 9 14 9C21.2976 9 26.7024 15 34 15C39 15 44 12 44 12"></svg:path></svg:g>`,
})
export class IconParkRippleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
