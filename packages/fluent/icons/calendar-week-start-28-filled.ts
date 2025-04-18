import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarWeekStart28FilledIcon],svg[fluent-calendar-week-start-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25zm2.5-5.25a.75.75 0 0 0 .743-.648L9.5 19V9l-.007-.102a.75.75 0 0 0-1.486 0L8 9v10l.007.102a.75.75 0 0 0 .743.648"></svg:path>`,
})
export class FluentCalendarWeekStart28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
