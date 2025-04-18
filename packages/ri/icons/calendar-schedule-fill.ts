import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCalendarScheduleFillIcon],svg[ri-calendar-schedule-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7.755A8 8 0 0 1 22 9.755V4a1 1 0 0 0-1-1h-4V1h-2v2H9V1zm16 15a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7-4v4.414l2.293 2.293l1.414-1.414L18 15.586V12z"></svg:path>`,
})
export class RiCalendarScheduleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
