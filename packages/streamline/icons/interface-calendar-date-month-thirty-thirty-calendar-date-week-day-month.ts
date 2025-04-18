import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon],svg[streamline-interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 6.5h1V11m-1 0h2"></svg:path><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M3.5 6.5H6l-1.5 2s1.5 0 1.5 1A1.33 1.33 0 0 1 4.5 11h-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
