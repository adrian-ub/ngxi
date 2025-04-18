import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarWeekStart20FilledIcon],svg[fluent-calendar-week-start-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm-8 3a.5.5 0 0 0-.492.41L6 6.5v7l.008.09a.5.5 0 0 0 .984 0L7 13.5v-7l-.008-.09A.5.5 0 0 0 6.5 6"></svg:path>`,
})
export class FluentCalendarWeekStart20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
