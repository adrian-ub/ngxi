import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarLtr12FilledIcon],svg[fluent-calendar-ltr-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.05 3A2.5 2.5 0 0 1 3.5 1h5a2.5 2.5 0 0 1 2.45 2zM1 4v4.5A2.5 2.5 0 0 0 3.5 11h5A2.5 2.5 0 0 0 11 8.5V4zm2 1.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M5 7.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentCalendarLtr12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
