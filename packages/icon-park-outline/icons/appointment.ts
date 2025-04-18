import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAppointmentIcon],svg[icon-park-outline-appointment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="11" r="7" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 41c0-8.837 8.059-16 18-16"></svg:path><svg:circle cx="34" cy="34" r="9"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 31v4h4"></svg:path></svg:g>`,
})
export class IconParkOutlineAppointmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
