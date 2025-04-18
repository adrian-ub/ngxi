import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightLightIcon],svg[ph-arrow-elbow-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m220.24 180.24l-48 48a6 6 0 0 1-8.48-8.48L201.51 182H72a6 6 0 0 1-6-6V32a6 6 0 0 1 12 0v138h123.51l-37.75-37.76a6 6 0 1 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowElbowDownRightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
