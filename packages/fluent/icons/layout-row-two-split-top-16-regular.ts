import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitTop16RegularIcon],svg[fluent-layout-row-two-split-top-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v3h4.5V3zm4 4.5H13v-3A1.5 1.5 0 0 0 11.5 3h-3zm4.5 1H3v3A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitTop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
