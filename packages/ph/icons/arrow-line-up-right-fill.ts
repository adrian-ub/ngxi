import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightFillIcon],svg[ph-arrow-line-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M74.34 173.66a8 8 0 0 1 0-11.32L132.69 104L90.34 61.66A8 8 0 0 1 96 48h96a8 8 0 0 1 8 8v96a8 8 0 0 1-13.66 5.66L144 115.31l-58.34 58.35a8 8 0 0 1-11.32 0M216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhArrowLineUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
