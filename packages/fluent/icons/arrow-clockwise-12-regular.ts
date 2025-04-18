import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise12RegularIcon],svg[fluent-arrow-clockwise-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.966 6.453c.038-.248.238-.453.489-.453c.3 0 .549.246.508.544A4 4 0 1 1 9 3.354V2.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.736a3 3 0 1 0 .73 2.453"></svg:path>`,
})
export class FluentArrowClockwise12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
