import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarOverdue24FilledIcon],svg[fluent-calendar-overdue-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M21 12.022V8.5H3v9.25A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022z" fill="currentColor"></svg:path><svg:path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25V7h18v-.75z" fill="currentColor"></svg:path><svg:path d="M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zm-6-3a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zm1.125 6a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCalendarOverdue24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
