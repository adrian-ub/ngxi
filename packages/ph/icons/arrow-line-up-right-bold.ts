import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightBoldIcon],svg[ph-arrow-line-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M80 180a12 12 0 0 0 8.49-3.51L180 85v67a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12H96a12 12 0 0 0 0 24h67l-91.49 91.51A12 12 0 0 0 80 180"></svg:path>`,
})
export class PhArrowLineUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
