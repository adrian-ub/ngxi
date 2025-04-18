import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarLink28FilledIcon],svg[fluent-calendar-link-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9.5v8.333a4.7 4.7 0 0 0-1.75-.333h-5.5a4.751 4.751 0 0 0-3.873 7.5H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zm-4 17a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zM17 22.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m6.25 2.25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentCalendarLink28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
