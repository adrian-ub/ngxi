import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon],svg[streamline-interface-calendar-disable-calendar-date-day-delete-disable-month-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m.27 7.27L5.23 6.23m3.54 0L5.23 9.77"></svg:path>`,
})
export class StreamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
