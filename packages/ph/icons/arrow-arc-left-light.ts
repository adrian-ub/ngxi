import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcLeftLightIcon],svg[ph-arrow-arc-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 184a6 6 0 0 1-12 0a90 90 0 0 0-153.64-63.64L38.55 146H88a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v49.58l25.89-25.72A102 102 0 0 1 230 184"></svg:path>`,
})
export class PhArrowArcLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
