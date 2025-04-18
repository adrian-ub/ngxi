import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarDataBar28FilledIcon],svg[fluent-calendar-data-bar-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9.5v6.55a2.5 2.5 0 0 0-2 .45v-1a2.5 2.5 0 0 0-5 0v4a2.5 2.5 0 0 0-4 2V25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zM20.5 14a1.5 1.5 0 0 0-1.5 1.5v10a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5m-4 6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m6.5-1.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0z"></svg:path>`,
})
export class FluentCalendarDataBar28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
