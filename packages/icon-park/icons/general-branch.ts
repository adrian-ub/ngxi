import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGeneralBranchIcon],svg[icon-park-general-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M40.0001 9H8C6.89543 9 6 9.89543 6 11L6.00003 41C6.00003 42.1046 6.89546 43 8.00003 43H40.0001C41.1047 43 42.0001 42.1046 42.0001 41V11C42.0001 9.89543 41.1047 9 40.0001 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 5V9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 5V9"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 17H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 11L6 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 11V23"></svg:path></svg:g>`,
})
export class IconParkGeneralBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
