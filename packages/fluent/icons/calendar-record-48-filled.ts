import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRecord48FilledIcon],svg[fluent-calendar-record-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42h11.794A12.94 12.94 0 0 1 22 35c0-7.18 5.82-13 13-13c2.577 0 4.98.75 7 2.044V16.5zm29 10a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17M35 46c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11s4.925 11 11 11m6-11a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class FluentCalendarRecord48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
