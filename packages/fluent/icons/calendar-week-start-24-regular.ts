import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarWeekStart24RegularIcon],svg[fluent-calendar-week-start-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7"></svg:path>`,
})
export class FluentCalendarWeekStart24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
