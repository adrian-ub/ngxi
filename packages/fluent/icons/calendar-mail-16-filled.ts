import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarMail16FilledIcon],svg[fluent-calendar-mail-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.05 3h9.9A2.5 2.5 0 0 0 8.5 1h-5a2.5 2.5 0 0 0-2.45 2M11 4H1v4.5A2.5 2.5 0 0 0 3.5 11H4V8.5A2.5 2.5 0 0 1 6.5 6H11zm-1.224 7.947L5 9.56v3.94A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5V9.559l-4.776 2.388a.5.5 0 0 1-.448 0M6.5 7a1.5 1.5 0 0 0-1.499 1.442L10 10.94l4.999-2.5A1.5 1.5 0 0 0 13.5 7z"></svg:path>`,
})
export class FluentCalendarMail16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
