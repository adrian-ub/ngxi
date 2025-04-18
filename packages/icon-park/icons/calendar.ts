import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarIcon],svg[icon-park-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 19H43V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V19Z"></svg:path><svg:path stroke="#000" d="M5 9C5 7.89543 5.89543 7 7 7H41C42.1046 7 43 7.89543 43 9V19H5V9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 4V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 34H34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 34H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 26H34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 26H20"></svg:path></svg:g>`,
})
export class IconParkCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
