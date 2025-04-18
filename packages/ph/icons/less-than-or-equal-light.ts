import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualLightIcon],svg[ph-less-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 104a6 6 0 0 1 3.93-5.63l152-56a6 6 0 1 1 4.15 11.26L65.36 104l136.71 50.37A6 6 0 0 1 200 166a6.1 6.1 0 0 1-2.08-.37l-152-56A6 6 0 0 1 42 104m158 90H48a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLessThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
