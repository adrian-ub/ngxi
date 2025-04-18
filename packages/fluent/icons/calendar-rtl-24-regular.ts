import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl24RegularIcon],svg[fluent-calendar-rtl-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75zm11.75 6a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.25-4a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.25 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-1.5-6h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75"></svg:path>`,
})
export class FluentCalendarRtl24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
