import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThreeIcon],svg[icon-park-calendar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 20H44"></svg:path><svg:path stroke="#fff" d="M4 32H44"></svg:path><svg:path stroke="#000" d="M17 4V12"></svg:path><svg:path stroke="#000" d="M31 4V12"></svg:path><svg:path stroke="#fff" d="M17 20V44"></svg:path><svg:path stroke="#fff" d="M31 20V44"></svg:path><svg:path stroke="#000" d="M44 13V39"></svg:path><svg:path stroke="#000" d="M4 13L4 39"></svg:path><svg:path stroke="#000" d="M14 44H34"></svg:path></svg:g>`,
})
export class IconParkCalendarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
