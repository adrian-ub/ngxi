import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowFlowDiagonalUpRight12RegularIcon],svg[fluent-arrow-flow-diagonal-up-right-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 1a.5.5 0 0 0 0 1h2.793L4.879 6.414a2.5 2.5 0 1 0 .707.707L10 2.707V5.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zM2 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class FluentArrowFlowDiagonalUpRight12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
