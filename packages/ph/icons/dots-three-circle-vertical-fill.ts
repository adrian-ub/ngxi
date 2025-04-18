import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotsThreeCircleVerticalFillIcon],svg[ph-dots-three-circle-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 128a104 104 0 1 0-104 104a104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDotsThreeCircleVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
