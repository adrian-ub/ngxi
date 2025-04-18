import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThirtyTwoIcon],svg[icon-park-calendar-thirty-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M28 20V34H36V20H28Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 4V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 20H20V34H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 27H14"></svg:path></svg:g>`,
})
export class IconParkCalendarThirtyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
