import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitTop16FilledIcon],svg[fluent-layout-row-two-split-top-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.5V2h-3A2.5 2.5 0 0 0 2 4.5v3zm1 0H14v-3A2.5 2.5 0 0 0 11.5 2h-3zm5.5 1H2v3A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitTop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
