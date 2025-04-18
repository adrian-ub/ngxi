import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl20FilledIcon],svg[fluent-calendar-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zM3 7h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zm9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-4a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentCalendarRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
