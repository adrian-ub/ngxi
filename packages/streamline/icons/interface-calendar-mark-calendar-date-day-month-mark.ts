import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon],svg[streamline-interface-calendar-mark-calendar-date-day-month-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:circle cx="3.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="7" cy="7.5" r=".5"></svg:circle><svg:circle cx="10.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="3.5" cy="10.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
