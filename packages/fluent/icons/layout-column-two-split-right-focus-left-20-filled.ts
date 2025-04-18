import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitRightFocusLeft20FilledIcon],svg[fluent-layout-column-two-split-right-focus-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7-2v5.5h6V6a2 2 0 0 0-2-2zm0 6.5V16h4a2 2 0 0 0 2-2v-3.5z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitRightFocusLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
