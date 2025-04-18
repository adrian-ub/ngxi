import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarArrowCounterclockwise20FilledIcon],svg[fluent-calendar-arrow-counterclockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H6.11l-.057-.06A1.5 1.5 0 0 0 4 5.874v1.418l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L3 7.293zM17 7v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5V9.917a1.5 1.5 0 0 0 1.553-.356l1.5-1.5c.293-.293.44-.677.44-1.061zM7 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m4-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentCalendarArrowCounterclockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
