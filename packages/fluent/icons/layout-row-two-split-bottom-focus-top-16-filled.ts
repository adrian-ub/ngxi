import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottomFocusTop16FilledIcon],svg[fluent-layout-row-two-split-bottom-focus-top-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM13 8H8.5v5h3a1.5 1.5 0 0 0 1.5-1.5zM7.5 8H3v3.5A1.5 1.5 0 0 0 4.5 13h3z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottomFocusTop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
