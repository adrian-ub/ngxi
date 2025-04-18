import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowDownRightFillIcon],svg[ph-arrow-elbow-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 181.66l-48 48A8 8 0 0 1 160 224v-40H72a8 8 0 0 1-8-8V32a8 8 0 0 1 16 0v136h80v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhArrowElbowDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
