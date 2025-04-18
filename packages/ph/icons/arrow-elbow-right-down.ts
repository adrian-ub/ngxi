import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDownIcon],svg[ph-arrow-elbow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 165.66l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L168 188.69V72H32a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8v124.69l34.34-34.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowElbowRightDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
