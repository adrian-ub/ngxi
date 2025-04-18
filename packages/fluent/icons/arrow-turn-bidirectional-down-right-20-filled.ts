import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnBidirectionalDownRight20FilledIcon],svg[fluent-arrow-turn-bidirectional-down-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 6H9a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L7.5 15.44V9A1.5 1.5 0 0 1 9 7.5h6.44l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class FluentArrowTurnBidirectionalDownRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
