import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleRightFillIcon],svg[eva-arrow-circle-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m11.86-3.69l2.86 3a.5.5 0 0 1 .1.15a.5.5 0 0 1 .1.16a.94.94 0 0 1 0 .76a1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38"></svg:path>`,
})
export class EvaArrowCircleRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
