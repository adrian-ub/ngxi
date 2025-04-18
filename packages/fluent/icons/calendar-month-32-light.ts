import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMonth32LightIcon],svg[fluent-calendar-month-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4A3.5 3.5 0 0 0 4 7.5v17A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4zM3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM9.5 14a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m8-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M11 19.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentCalendarMonth32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
