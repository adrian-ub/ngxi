import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBidirectionalLeftRight16FilledIcon],svg[fluent-arrow-bidirectional-left-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.03 5.22a.75.75 0 0 1 0 1.06L4.56 7.75h6.88L9.97 6.28a.75.75 0 0 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 1 1-1.06-1.06l1.47-1.47H4.56l1.47 1.47a.75.75 0 1 1-1.06 1.06L2.22 9.03a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentArrowBidirectionalLeftRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
