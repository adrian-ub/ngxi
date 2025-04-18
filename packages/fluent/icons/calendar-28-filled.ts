import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendar28FilledIcon],svg[fluent-calendar-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9.5v12.25A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM8.741 17.501a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.255 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-5.255-5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.255 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m5.254 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path>`,
})
export class FluentCalendar28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
