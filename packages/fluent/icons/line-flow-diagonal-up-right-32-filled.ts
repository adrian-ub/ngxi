import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineFlowDiagonalUpRight32FilledIcon],svg[fluent-line-flow-diagonal-up-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.707 6.707a1 1 0 0 0-1.414-1.414L11.618 18.968a5.5 5.5 0 1 0 1.414 1.414z"></svg:path>`,
})
export class FluentLineFlowDiagonalUpRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
