import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRoutingRectangleMultiple20RegularIcon],svg[fluent-arrow-routing-rectangle-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm8 2a.5.5 0 0 0-1 0V17a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H17a2 2 0 0 0 2-2zM14.314 3.146a.5.5 0 0 0-.707.708L16.253 6.5H12A2.5 2.5 0 0 0 9.5 9v2A1.5 1.5 0 0 1 8 12.5h-.041a3 3 0 1 0 0 1H8a2.5 2.5 0 0 0 2.5-2.5V9A1.5 1.5 0 0 1 12 7.5h4.253l-2.646 2.646a.5.5 0 1 0 .707.707l3.5-3.5a.5.5 0 0 0 0-.707zM7 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentArrowRoutingRectangleMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
