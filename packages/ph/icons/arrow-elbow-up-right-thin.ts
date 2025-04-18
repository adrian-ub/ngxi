import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightThinIcon],svg[ph-arrow-elbow-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 82.83l-48 48a4 4 0 0 1-5.66-5.66L206.34 84H76v140a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h134.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowElbowUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
