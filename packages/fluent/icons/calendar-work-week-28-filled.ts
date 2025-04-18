import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarWorkWeek28FilledIcon],svg[fluent-calendar-work-week-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.5v-4h10v4zm-6 8.25A3.25 3.25 0 0 0 6.25 25h15.5A3.25 3.25 0 0 0 25 21.75V6.25A3.25 3.25 0 0 0 21.75 3H6.25A3.25 3.25 0 0 0 3 6.25zM8.25 8h11.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-5.5A.75.75 0 0 1 8.25 8"></svg:path>`,
})
export class FluentCalendarWorkWeek28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
