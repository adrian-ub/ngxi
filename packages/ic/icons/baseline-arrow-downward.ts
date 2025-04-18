import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineArrowDownwardIcon],svg[ic-baseline-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"></svg:path>`,
})
export class IcBaselineArrowDownwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
