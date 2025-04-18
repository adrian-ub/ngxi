import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitLeftFocusTopLeft20FilledIcon],svg[fluent-layout-column-two-split-left-focus-top-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.5 4H4v4a2 2 0 0 0 2 2h3.5zm4.5 6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.5v12z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitLeftFocusTopLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
