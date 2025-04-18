import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightBoldIcon],svg[ph-arrow-elbow-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m224.49 184.49l-48 48a12 12 0 0 1-17-17L187 188H72a12 12 0 0 1-12-12V32a12 12 0 0 1 24 0v132h103l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowElbowDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
