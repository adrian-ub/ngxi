import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnTwoSplitRight20RegularIcon],svg[fluent-layout-column-two-split-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.5V4zm8 12a2 2 0 0 0 2-2v-3.5h-5.5V16zm2-6.5V6a2 2 0 0 0-2-2h-3.5v5.5z"></svg:path>`,
})
export class FluentLayoutColumnTwoSplitRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
