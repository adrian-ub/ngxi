import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl12FilledIcon],svg[fluent-calendar-rtl-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.95 3A2.5 2.5 0 0 0 8.5 1h-5a2.5 2.5 0 0 0-2.45 2zM11 4v4.5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5V4zM9 5.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m0 2a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M6.5 5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M7 7.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M4.5 5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentCalendarRtl12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
