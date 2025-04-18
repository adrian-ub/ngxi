import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitBottom20FilledIcon],svg[fluent-layout-row-two-split-bottom-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v3.5h14V6a3 3 0 0 0-3-3zm11 7.5h-6.5V17H14a3 3 0 0 0 3-3zm-7.5 0H3V14a3 3 0 0 0 3 3h3.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitBottom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
