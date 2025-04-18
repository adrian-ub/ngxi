import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendar20FilledIcon],svg[fluent-calendar-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H3v7.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5zm-9 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentCalendar20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
