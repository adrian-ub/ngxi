import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowCircleUpLeftLightIcon],svg[ph-arrow-circle-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m36.24-62.24a6 6 0 1 1-8.48 8.48L102 110.49V144a6 6 0 0 1-12 0V96a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-33.51Z"></svg:path>`,
})
export class PhArrowCircleUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
