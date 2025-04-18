import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitRight24FilledIcon],svg[fluent-layout-column-two-split-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21M21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25zM6.25 3h5v18h-5A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
