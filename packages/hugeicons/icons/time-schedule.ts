import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeScheduleIcon],svg[hugeicons-time-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 8v4l1.5 1.5m6.045 2.953C21.182 17.337 22 17.78 22 18.5s-.818 1.163-2.455 2.047l-1.114.601c-1.257.679-1.885 1.018-2.187.772c-.74-.605.413-2.164.696-2.716c.288-.56.282-.858 0-1.408c-.283-.552-1.436-2.111-.696-2.716c.302-.246.93.093 2.187.772z"></svg:path><svg:path d="M13.026 21.948Q12.52 21.999 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"></svg:path></svg:g>`,
})
export class HugeiconsTimeScheduleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
