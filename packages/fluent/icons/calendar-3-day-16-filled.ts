import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendar3Day16FilledIcon],svg[fluent-calendar-3-day-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5zm-8-6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentCalendar3Day16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
