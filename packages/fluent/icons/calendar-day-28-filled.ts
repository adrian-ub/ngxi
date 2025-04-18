import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarDay28FilledIcon],svg[fluent-calendar-day-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM19 12H9a1 1 0 0 0-.993.883L8 13v6a1 1 0 0 0 .883.993L9 20h10a1 1 0 0 0 .993-.883L20 19v-6a1 1 0 0 0-.883-.993zm-.5 1.5v5h-9v-5zM19 8H9l-.102.007a.75.75 0 0 0 0 1.486L9 9.5h10l.102-.007a.75.75 0 0 0 0-1.486z"></svg:path>`,
})
export class FluentCalendarDay28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
