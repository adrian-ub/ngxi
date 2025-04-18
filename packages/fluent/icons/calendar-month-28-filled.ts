import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMonth28FilledIcon],svg[fluent-calendar-month-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM8.5 15.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-5.5-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentCalendarMonth28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
