import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExcelIcon],svg[icon-park-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M8 15V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V33"></svg:path><svg:path stroke="#000" d="M31 15H34"></svg:path><svg:path stroke="#000" d="M28 23H34"></svg:path><svg:path stroke="#000" d="M28 31H34"></svg:path><svg:rect width="18" height="18" x="4" y="15" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linejoin="round" d="M10 21L16 27"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M16 21L10 27"></svg:path></svg:g>`,
})
export class IconParkExcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
