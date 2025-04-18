import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualThinIcon],svg[ph-less-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 104a4 4 0 0 1 2.62-3.75l152-56a4 4 0 1 1 2.76 7.5L59.57 104l141.81 52.25A4 4 0 0 1 200 164a3.9 3.9 0 0 1-1.38-.25l-152-56A4 4 0 0 1 44 104m156 92H48a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLessThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
