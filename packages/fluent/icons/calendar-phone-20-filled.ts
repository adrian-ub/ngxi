import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarPhone20FilledIcon],svg[fluent-calendar-phone-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v1.05a2.5 2.5 0 0 0-.5-.05h-3a2.5 2.5 0 0 0-2.5 2.5v6q0 .257.05.5H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm-.75 6A1.75 1.75 0 0 0 12 10.75v5.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 18 16.25v-5.5A1.75 1.75 0 0 0 16.25 9zm.25 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentCalendarPhone20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
