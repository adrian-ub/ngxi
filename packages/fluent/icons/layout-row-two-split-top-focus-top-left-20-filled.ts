import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitTopFocusTopLeft20FilledIcon],svg[fluent-layout-row-two-split-top-focus-top-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4 6.5V4h4a2 2 0 0 1 2 2v3.5zm6 1V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitTopFocusTopLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
