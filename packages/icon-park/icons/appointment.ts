import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAppointmentIcon],svg[icon-park-appointment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:circle cx="34" cy="34" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 31V35H37"></svg:path></svg:g>`,
})
export class IconParkAppointmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
