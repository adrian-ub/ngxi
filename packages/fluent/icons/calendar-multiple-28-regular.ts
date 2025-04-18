import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMultiple28RegularIcon],svg[fluent-calendar-multiple-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v13.5A3.25 3.25 0 0 0 6.25 23h13.5A3.25 3.25 0 0 0 23 19.75V6.25A3.25 3.25 0 0 0 19.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75V7h-17zm0 2.25h17v11.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zm4.247 17a3.25 3.25 0 0 1-2.74-1.5h14.24a3.75 3.75 0 0 0 3.75-3.75v-1.072L24 19V6.013a3.25 3.25 0 0 1 1.497 2.737v11.5c0 2.9-2.35 5.25-5.25 5.25z"></svg:path>`,
})
export class FluentCalendarMultiple28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
