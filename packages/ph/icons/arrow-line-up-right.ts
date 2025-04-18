import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpRightIcon],svg[ph-arrow-line-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M80 176a8 8 0 0 0 5.66-2.34L184 75.31V152a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16h76.69l-98.35 98.34A8 8 0 0 0 80 176"></svg:path>`,
})
export class PhArrowLineUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
