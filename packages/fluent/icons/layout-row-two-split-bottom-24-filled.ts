import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottom24FilledIcon],svg[fluent-layout-row-two-split-bottom-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v5h18v-5A3.25 3.25 0 0 0 17.75 3zM21 12.75h-8.25V21h5A3.25 3.25 0 0 0 21 17.75zm-9.75 0H3v5A3.25 3.25 0 0 0 6.25 21h5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
