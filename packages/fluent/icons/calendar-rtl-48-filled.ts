import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl48FilledIcon],svg[fluent-calendar-rtl-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 12.25A6.25 6.25 0 0 0 35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25V14h36zm0 4.25v19.25A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75V16.5zm-12 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M24 26a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M32.5 34a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-11-2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path>`,
})
export class FluentCalendarRtl48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
