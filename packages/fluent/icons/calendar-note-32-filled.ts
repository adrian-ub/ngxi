import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarNote32FilledIcon],svg[fluent-calendar-note-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5V9h26V7.5A4.5 4.5 0 0 0 24.5 3zM29 11H3v13.5A4.5 4.5 0 0 0 7.5 29h6.626A4 4 0 0 1 14 28v-9a4 4 0 0 1 4-4h10q.519.002 1 .126zm-11 5.5a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zM18 25.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentCalendarNote32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
