import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarLock16FilledIcon],svg[fluent-calendar-lock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h9.5a3 3 0 0 0-3 3v.063A2 2 0 0 0 7 11v3H4.5A2.5 2.5 0 0 1 2 11.5zm12-1.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zM9.5 9v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V9a2 2 0 1 0-4 0m1 1V9a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentCalendarLock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
