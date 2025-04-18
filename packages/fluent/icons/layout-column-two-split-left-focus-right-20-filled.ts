import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitLeftFocusRight20FilledIcon],svg[fluent-layout-column-two-split-left-focus-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h6V4zm4 12v-5.5H4V14a2 2 0 0 0 2 2z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitLeftFocusRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
