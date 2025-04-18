import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightBoldIcon],svg[ph-arrow-elbow-up-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 88.49l-48 48a12 12 0 0 1-17-17L187 92H84v132a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h115l-27.49-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1-.02 17"></svg:path>`,
})
export class PhArrowElbowUpRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
