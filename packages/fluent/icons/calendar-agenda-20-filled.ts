import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarAgenda20FilledIcon],svg[fluent-calendar-agenda-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5zm-3-8a.5.5 0 0 0-.41-.492L13.5 6h-7l-.09.008a.5.5 0 0 0 0 .984L6.5 7h7l.09-.008A.5.5 0 0 0 14 6.5m0 3.5a.5.5 0 0 0-.41-.492L13.5 9.5h-7l-.09.008a.5.5 0 0 0 0 .984l.09.008h7l.09-.008A.5.5 0 0 0 14 10m0 3.5a.5.5 0 0 0-.41-.492L13.5 13h-7l-.09.008a.5.5 0 0 0 0 .984L6.5 14h7l.09-.008A.5.5 0 0 0 14 13.5"></svg:path>`,
})
export class FluentCalendarAgenda20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
