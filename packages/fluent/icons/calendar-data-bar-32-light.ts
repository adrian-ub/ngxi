import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarDataBar32LightIcon],svg[fluent-calendar-data-bar-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11v13.5A3.5 3.5 0 0 0 7.5 28h8v1h-8A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v11a3.5 3.5 0 0 0-1 .145V11zm3.5-7A3.5 3.5 0 0 0 4 7.5V10h24V7.5A3.5 3.5 0 0 0 24.5 4zM24 16a2 2 0 0 0-2 2v11a2 2 0 1 0 4 0V18a2 2 0 0 0-2-2m5 4a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0v-7a2 2 0 0 0-2-2m-12 4a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0z"></svg:path>`,
})
export class FluentCalendarDataBar32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
