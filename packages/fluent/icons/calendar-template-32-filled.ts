import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarTemplate32FilledIcon],svg[fluent-calendar-template-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5A4.5 4.5 0 0 1 6.5 2h15A4.5 4.5 0 0 1 26 6.5v5h-9.5a5 5 0 0 0-2.182.5H8a1 1 0 1 0 0 2h4.169a5 5 0 0 0-.669 2.5V26h-5A4.5 4.5 0 0 1 2 21.5zM7 9a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1m6 7.5a3.5 3.5 0 0 1 3.5-3.5h10a3.5 3.5 0 0 1 3.5 3.5V18H13zm0 10V20h17v6.5a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5"></svg:path>`,
})
export class FluentCalendarTemplate32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
