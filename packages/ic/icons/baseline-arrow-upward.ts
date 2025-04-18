import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineArrowUpwardIcon],svg[ic-baseline-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"></svg:path>`,
})
export class IcBaselineArrowUpwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
