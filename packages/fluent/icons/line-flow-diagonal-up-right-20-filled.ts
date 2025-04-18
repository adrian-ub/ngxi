import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineFlowDiagonalUpRight20FilledIcon],svg[fluent-line-flow-diagonal-up-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.854 4.854a.5.5 0 0 0-.708-.708l-7.408 7.409a3 3 0 1 0 .707.707z"></svg:path>`,
})
export class FluentLineFlowDiagonalUpRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
