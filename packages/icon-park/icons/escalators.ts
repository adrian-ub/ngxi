import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEscalatorsIcon],svg[icon-park-escalators-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M35 13L13 35H4V44H13L35 22H44V13H35Z"></svg:path><svg:path d="M19 13L28 4"></svg:path><svg:path d="M22 4H28V10"></svg:path><svg:path d="M14 18L5 27"></svg:path><svg:path d="M11 27H5V21"></svg:path></svg:g>`,
})
export class IconParkEscalatorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
