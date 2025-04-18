import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalLeftRight28FilledIcon],svg[fluent-arrow-bidirectional-left-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.707 7.295a1 1 0 0 1 0 1.414l-4.293 4.293h15.172l-4.293-4.293a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.415l4.293-4.292H6.414l4.293 4.292a1 1 0 0 1-1.414 1.415l-6-6a1 1 0 0 1 0-1.415l6-6a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowBidirectionalLeftRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
