import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwoSplitTop20FilledIcon],svg[fluent-layout-row-two-split-top-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 9.5V3H6a3 3 0 0 0-3 3v3.5zm1 0H17V6a3 3 0 0 0-3-3h-3.5zm6.5 1H3V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z"></svg:path>`,
})
export class FluentLayoutRowTwoSplitTop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
