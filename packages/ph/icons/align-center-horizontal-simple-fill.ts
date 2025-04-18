import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterHorizontalSimpleFillIcon],svg[ph-align-center-horizontal-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v64a16 16 0 0 1-16 16h-72v32a8 8 0 0 1-16 0v-32H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h72V48a8 8 0 0 1 16 0v32h72a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhAlignCenterHorizontalSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
