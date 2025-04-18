import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottomFocusTop20FilledIcon],svg[fluent-layout-row-two-split-bottom-focus-top-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm13 4h-5.5v6H14a2 2 0 0 0 2-2zm-6.5 0H4v4a2 2 0 0 0 2 2h3.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottomFocusTop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
