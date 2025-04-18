import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightThinIcon],svg[ph-arrow-line-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-28 60a4 4 0 0 0-4 4v86.34L82.83 85.17a4 4 0 0 0-5.66 5.66L182.34 196H96a4 4 0 0 0 0 8h96a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowLineDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
