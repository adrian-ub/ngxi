import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightFillIcon],svg[ph-arrow-line-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-28.94 56.61a8 8 0 0 0-8.72 1.73L144 140.69L85.66 82.34a8 8 0 0 0-11.32 11.32L132.69 152l-42.35 42.34A8 8 0 0 0 96 208h96a8 8 0 0 0 8-8v-96a8 8 0 0 0-4.94-7.39"></svg:path>`,
})
export class PhArrowLineDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
