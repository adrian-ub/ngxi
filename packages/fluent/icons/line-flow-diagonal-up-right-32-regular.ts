import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineFlowDiagonalUpRight32RegularIcon],svg[fluent-line-flow-diagonal-up-right-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.707 6.707a1 1 0 0 0-1.414-1.414L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414zM5 23.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class FluentLineFlowDiagonalUpRight32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
