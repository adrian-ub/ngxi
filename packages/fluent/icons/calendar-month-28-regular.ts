import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMonth28RegularIcon],svg[fluent-calendar-month-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M8.5 15.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-5.5-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path>`,
})
export class FluentCalendarMonth28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
