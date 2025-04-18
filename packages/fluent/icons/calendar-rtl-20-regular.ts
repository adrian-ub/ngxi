import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendarRtl20RegularIcon],svg[fluent-calendar-rtl-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zM16 7H4v7.5A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5zm-1.5-3h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4"></svg:path>`,
})
export class FluentCalendarRtl20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
