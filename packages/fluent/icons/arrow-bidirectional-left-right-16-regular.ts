import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalLeftRight16RegularIcon],svg[fluent-arrow-bidirectional-left-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.146 8.853a.5.5 0 0 1 0-.707l3-3a.5.5 0 1 1 .708.707L3.707 8h8.586l-2.147-2.147a.5.5 0 0 1 .708-.707l3 3a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708-.707L12.293 9H3.707l2.147 2.146a.5.5 0 1 1-.708.707z"></svg:path>`,
})
export class FluentArrowBidirectionalLeftRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
