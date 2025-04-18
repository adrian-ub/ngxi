import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePptIcon],svg[icon-park-file-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25 41H38V34"></svg:path><svg:path stroke-linejoin="round" d="M25 7H38V14"></svg:path><svg:path stroke-linejoin="round" d="M25 34.2432V44L10 38.6187V34"></svg:path><svg:path stroke-linejoin="round" d="M25 13.973V4L10 9.38125V13.973"></svg:path><svg:rect width="40" height="20" x="4" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M10 19V29"></svg:path><svg:path d="M21 19V29"></svg:path><svg:path stroke-linejoin="round" d="M35 20V28"></svg:path><svg:path stroke-linejoin="round" d="M32 20H35H38"></svg:path><svg:path stroke-linejoin="round" d="M10 19H13C14.6569 19 16 20.3431 16 22V22C16 23.6569 14.6569 25 13 25H10"></svg:path><svg:path stroke-linejoin="round" d="M21 19H24C25.6569 19 27 20.3431 27 22V22C27 23.6569 25.6569 25 24 25H21"></svg:path></svg:g>`,
})
export class IconParkFilePptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
