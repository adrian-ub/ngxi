import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimScheduleIcon],svg[uim-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3"></svg:path><svg:circle cx="7" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9zm5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m5 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0-4a1 1 0 1 1 0-2a1 1 0 0 1 0 2" opacity=".5"></svg:path>`,
})
export class UimScheduleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
