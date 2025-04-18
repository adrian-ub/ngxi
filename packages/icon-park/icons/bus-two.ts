import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBusTwoIcon],svg[icon-park-bus-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M4 6C4 4.89543 4.89543 4 6 4H42C43.1046 4 44 4.89543 44 6V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V6Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M16 40H8V44H16V40Z"></svg:path><svg:path stroke="#000" d="M40 40H32V44H40V40Z"></svg:path><svg:path stroke="#fff" d="M21 16H27"></svg:path><svg:path stroke="#fff" d="M10 34H12"></svg:path><svg:path stroke="#fff" d="M19 34H29"></svg:path><svg:path stroke="#fff" d="M4 25H44"></svg:path><svg:path stroke="#fff" d="M4 10H44"></svg:path><svg:path stroke="#fff" d="M36 34H38"></svg:path><svg:path stroke="#000" d="M4 6V14"></svg:path><svg:path stroke="#000" d="M44 6V14"></svg:path><svg:path stroke="#000" d="M4 21V29"></svg:path><svg:path stroke="#000" d="M44 21V29"></svg:path></svg:g>`,
})
export class IconParkBusTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
