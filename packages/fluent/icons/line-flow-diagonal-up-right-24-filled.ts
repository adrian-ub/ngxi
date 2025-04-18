import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineFlowDiagonalUpRight24FilledIcon],svg[fluent-line-flow-diagonal-up-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.78 5.28a.75.75 0 0 0-1.06-1.06l-9.472 9.47a4 4 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentLineFlowDiagonalUpRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
