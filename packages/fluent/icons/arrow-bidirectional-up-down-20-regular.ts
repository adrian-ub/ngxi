import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalUpDown20RegularIcon],svg[fluent-arrow-bidirectional-up-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.354 7.354a.5.5 0 1 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 4.707v10.586l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 .708-.708L9 15.293V4.707z"></svg:path>`,
})
export class FluentArrowBidirectionalUpDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
