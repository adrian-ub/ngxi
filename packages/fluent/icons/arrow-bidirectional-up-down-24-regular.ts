import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalUpDown24RegularIcon],svg[fluent-arrow-bidirectional-up-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 5.628v12.744l-3.456-3.639a.75.75 0 0 0-1.088 1.034l4.75 5a.75.75 0 0 0 1.088 0l4.75-5a.75.75 0 0 0-1.088-1.034l-3.456 3.639V5.628l3.456 3.639a.75.75 0 1 0 1.088-1.034l-4.75-4.998a.75.75 0 0 0-1.089 0L6.706 8.233a.75.75 0 1 0 1.088 1.034z"></svg:path>`,
})
export class FluentArrowBidirectionalUpDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
