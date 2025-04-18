import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftLightIcon],svg[ph-arrow-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 196.24a6 6 0 0 1-8.48 0L70 78.48V168a6 6 0 0 1-12 0V64a6 6 0 0 1 6-6h104a6 6 0 0 1 0 12H78.48l117.76 117.76a6 6 0 0 1 0 8.48"></svg:path>`,
})
export class PhArrowUpLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
