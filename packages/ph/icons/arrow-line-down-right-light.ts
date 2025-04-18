import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownRightLightIcon],svg[ph-arrow-line-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-30 58a6 6 0 0 0-6 6v81.52L84.24 83.76a6 6 0 0 0-8.48 8.48L177.52 194H96a6 6 0 0 0 0 12h96a6 6 0 0 0 6-6v-96a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowLineDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
