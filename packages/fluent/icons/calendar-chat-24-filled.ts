import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarChat24FilledIcon],svg[fluent-calendar-chat-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8.5v3.521a6.501 6.501 0 0 0-9.385 8.243L11.39 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3zM21 13.256A5.48 5.48 0 0 0 17.501 12a5.5 5.5 0 0 0-4.812 8.169l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666A5.501 5.501 0 0 0 21 13.256M15.5 17a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"></svg:path>`,
})
export class FluentCalendarChat24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
