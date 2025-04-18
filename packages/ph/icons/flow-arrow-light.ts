import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowLightIcon],svg[ph-flow-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"></svg:path>`,
})
export class PhFlowArrowLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
