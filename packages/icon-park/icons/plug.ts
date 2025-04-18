import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlugIcon],svg[icon-park-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 14H42V24C38 32 32 36 24 36C16 36 10 32 6 24V14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 34L32 44H16L15 34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 24H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4L16 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 4V12"></svg:path></svg:g>`,
})
export class IconParkPlugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
