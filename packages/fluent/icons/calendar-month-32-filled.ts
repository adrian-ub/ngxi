import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMonth32FilledIcon],svg[fluent-calendar-month-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zm9 5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M10.5 20a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentCalendarMonth32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
