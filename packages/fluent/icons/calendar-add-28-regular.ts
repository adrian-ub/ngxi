import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarAdd28RegularIcon],svg[fluent-calendar-add-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 6.25A3.25 3.25 0 0 0 21.75 3H6.25A3.25 3.25 0 0 0 3 6.25v15.5A3.25 3.25 0 0 0 6.25 25h8.25a7.5 7.5 0 0 1-.876-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V9.503h19v4.121a7.5 7.5 0 0 1 1.5.875zM6.25 4.5h15.5c.966 0 1.75.784 1.75 1.75v1.753h-19V6.25c0-.966.784-1.75 1.75-1.75M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"></svg:path>`,
})
export class FluentCalendarAdd28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
