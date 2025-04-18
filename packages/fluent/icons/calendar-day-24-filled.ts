import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarDay24FilledIcon],svg[fluent-calendar-day-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-1.5 8h-8.5a.75.75 0 0 0-.743.648L7 11.75v4.5c0 .38.282.694.648.743L7.75 17h8.5a.75.75 0 0 0 .743-.648L17 16.25v-4.5a.75.75 0 0 0-.648-.743zm-.75 1.5v3h-7v-3zm.75-5.25h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class FluentCalendarDay24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
