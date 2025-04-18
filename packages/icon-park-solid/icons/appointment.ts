import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAppointmentIcon],svg[icon-park-solid-appointment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAppointment0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 41c0-8.837 8.059-16 18-16"></svg:path><svg:circle cx="34" cy="34" r="9" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 31v4h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAppointment0)"></svg:path>`,
})
export class IconParkSolidAppointmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
