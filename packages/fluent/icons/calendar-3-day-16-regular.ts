import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendar3Day16RegularIcon],svg[fluent-calendar-3-day-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zm3-1A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5zm-11 7v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5"></svg:path>`,
})
export class FluentCalendar3Day16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
