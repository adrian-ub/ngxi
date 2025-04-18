import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarWeekNumbers24RegularIcon],svg[fluent-calendar-week-numbers-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M7.75 7a.75.75 0 0 1 .743.648l.007.102v1a.75.75 0 0 1-1.493.102L7 8.75v-1A.75.75 0 0 1 7.75 7m.743 8.148A.75.75 0 0 0 7 15.25v1l.007.102A.75.75 0 0 0 8.5 16.25v-1zm.007-3.827a.75.75 0 0 0-1.493.102L7 12.57l.007.102A.75.75 0 0 0 8.5 12.57l.007-1.148z"></svg:path>`,
})
export class FluentCalendarWeekNumbers24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
