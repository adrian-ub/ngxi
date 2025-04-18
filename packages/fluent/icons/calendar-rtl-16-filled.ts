import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl16FilledIcon],svg[fluent-calendar-rtl-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.5V6h12v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5m8.003-3.252a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m0 2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m-2.752-2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m0 2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m-2.748-2.5a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V5H2z"></svg:path>`,
})
export class FluentCalendarRtl16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
