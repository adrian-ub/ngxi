import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarPlay28FilledIcon],svg[fluent-calendar-play-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 9.5v5A7.5 7.5 0 0 0 14.5 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zM21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zM20.5 27a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-.902-9.404l4.032 2.275a.72.72 0 0 1 0 1.258l-4.032 2.274c-.49.277-1.098-.072-1.098-.629v-4.548c0-.557.609-.905 1.098-.63"></svg:path>`,
})
export class FluentCalendarPlay28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
