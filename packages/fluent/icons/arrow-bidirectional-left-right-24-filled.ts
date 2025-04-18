import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalLeftRight24FilledIcon],svg[fluent-arrow-bidirectional-left-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.457 6.543a1 1 0 0 1 0 1.414L6.414 11h11.172l-3.043-3.043a1 1 0 0 1 1.414-1.414l4.75 4.75a1 1 0 0 1 0 1.414l-4.75 4.75a1 1 0 0 1-1.414-1.414L17.586 13H6.414l3.043 3.043a1 1 0 1 1-1.414 1.414l-4.75-4.75a1 1 0 0 1 0-1.414l4.75-4.75a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowBidirectionalLeftRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
