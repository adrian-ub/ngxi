import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarLtr32FilledIcon],svg[fluent-calendar-ltr-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V9H3zM3 11v13.5A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V11zm7.5 7a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1.5-6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentCalendarLtr32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
