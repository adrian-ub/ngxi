import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitLeft20FilledIcon],svg[fluent-layout-column-two-split-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-3.5V3H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3M6 3h3.5v6.5H3V6a3 3 0 0 1 3-3m-3 7.5V14a3 3 0 0 0 3 3h3.5v-6.5z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
