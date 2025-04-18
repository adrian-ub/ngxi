import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottom20RegularIcon],svg[fluent-layout-row-two-split-bottom-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h12V6a2 2 0 0 0-2-2zm10 6.5h-5.5V16H14a2 2 0 0 0 2-2zm-6.5 0H4V14a2 2 0 0 0 2 2h3.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottom20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
