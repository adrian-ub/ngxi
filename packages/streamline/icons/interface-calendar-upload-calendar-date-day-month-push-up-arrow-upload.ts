import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon],svg[streamline-interface-calendar-upload-calendar-date-day-month-push-up-arrow-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m5 8l2-2l2 2M7 6v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
