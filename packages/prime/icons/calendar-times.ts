import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCalendarTimesIcon],svg[prime-calendar-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4.75h-1.25V3.5a.75.75 0 0 0-1.5 0v1.25h-4.5V3.5a.75.75 0 0 0-1.5 0v1.25H7A2.75 2.75 0 0 0 4.25 7.5v11A2.75 2.75 0 0 0 7 21.25h10a2.75 2.75 0 0 0 2.75-2.75v-11A2.75 2.75 0 0 0 17 4.75M7 6.25h1.25V7.5a.75.75 0 0 0 1.5 0V6.25h4.5V7.5a.75.75 0 0 0 1.5 0V6.25H17a1.25 1.25 0 0 1 1.25 1.25v2.75H5.75V7.5A1.25 1.25 0 0 1 7 6.25m10 13.5H7a1.25 1.25 0 0 1-1.25-1.25v-6.75h12.5v6.75A1.25 1.25 0 0 1 17 19.75"></svg:path><svg:path fill="currentColor" d="M13.94 14.06a.74.74 0 0 0-1.06 0l-.88.88l-.88-.88a.75.75 0 0 0-1.06 1.06l.88.88l-.88.88a.74.74 0 0 0 0 1.06a.7.7 0 0 0 .53.22a.74.74 0 0 0 .53-.22l.88-.88l.88.88a.74.74 0 0 0 .53.22a.7.7 0 0 0 .53-.22a.74.74 0 0 0 0-1.06l-.88-.88l.88-.88a.74.74 0 0 0 0-1.06"></svg:path>`,
})
export class PrimeCalendarTimesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
