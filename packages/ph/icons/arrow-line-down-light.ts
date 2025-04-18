import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownLightIcon],svg[ph-arrow-line-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.76 116.24a6 6 0 0 1 8.48-8.48L122 169.51V32a6 6 0 0 1 12 0v137.51l61.76-61.75a6 6 0 0 1 8.48 8.48l-72 72a6 6 0 0 1-8.48 0ZM216 210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhArrowLineDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
