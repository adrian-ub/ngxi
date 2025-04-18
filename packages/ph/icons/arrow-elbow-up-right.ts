import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightIcon],svg[ph-arrow-elbow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 85.66l-48 48a8 8 0 0 1-11.32-11.32L196.69 88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h124.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowUpRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
