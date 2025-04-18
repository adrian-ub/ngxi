import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutCellFourFocusTopLeft20FilledIcon],svg[fluent-layout-cell-four-focus-top-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-2 7.5h5.5V16H6a2 2 0 0 1-2-2zm12 0V14a2 2 0 0 1-2 2h-3.5v-5.5zm-5.5-1V4H14a2 2 0 0 1 2 2v3.5z"></svg:path>`,
})
export class FluentLayoutCellFourFocusTopLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
