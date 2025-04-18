import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMultiple28FilledIcon],svg[fluent-calendar-multiple-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.008 24a3.25 3.25 0 0 0 2.74 1.5h11.5a5.25 5.25 0 0 0 5.25-5.25V8.75c0-1.15-.597-2.16-1.498-2.737V19q0 .09-.003.178v1.072a3.75 3.75 0 0 1-3.75 3.75zM3 6.25A3.25 3.25 0 0 1 6.25 3h13.5A3.25 3.25 0 0 1 23 6.25V7H3zM3 8.5v11.25A3.25 3.25 0 0 0 6.25 23h13.5A3.25 3.25 0 0 0 23 19.75V8.5z"></svg:path>`,
})
export class FluentCalendarMultiple28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
