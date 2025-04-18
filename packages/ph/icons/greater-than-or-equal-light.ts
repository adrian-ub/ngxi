import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualLightIcon],svg[ph-greater-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.93 154.37L190.64 104L53.93 53.63a6 6 0 1 1 4.15-11.26l152 56a6 6 0 0 1 0 11.26l-152 56A6.1 6.1 0 0 1 56 166a6 6 0 0 1-2.07-11.63M208 194H56a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhGreaterThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
