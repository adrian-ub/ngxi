import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFourFocusBottomLeft20FilledIcon],svg[fluent-layout-cell-four-focus-bottom-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h3.5v5.5H4zm12 4.5V14a2 2 0 0 1-2 2h-3.5v-5.5zm-5.5-1V4H14a2 2 0 0 1 2 2v3.5z"></svg:path>`,
})
export class FluentLayoutCellFourFocusBottomLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
