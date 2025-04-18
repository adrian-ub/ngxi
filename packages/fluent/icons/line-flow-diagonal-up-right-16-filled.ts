import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineFlowDiagonalUpRight16FilledIcon],svg[fluent-line-flow-diagonal-up-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.854 3.854a.5.5 0 0 0-.708-.708L5.88 9.414a2.5 2.5 0 1 0 .707.707z"></svg:path>`,
})
export class FluentLineFlowDiagonalUpRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
