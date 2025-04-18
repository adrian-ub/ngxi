import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightFillIcon],svg[ph-arrow-elbow-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 85.66l-48 48A8 8 0 0 1 160 128V88H80v136a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h88V32a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowUpRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
