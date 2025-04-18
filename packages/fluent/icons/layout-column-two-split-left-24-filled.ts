import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitLeft24FilledIcon],svg[fluent-layout-column-two-split-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 21h-5V3h5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21M6.25 3h5v8.25H3v-5A3.25 3.25 0 0 1 6.25 3M3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
