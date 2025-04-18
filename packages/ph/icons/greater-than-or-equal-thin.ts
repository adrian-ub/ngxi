import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualThinIcon],svg[ph-greater-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.62 156.25L196.43 104L54.62 51.75a4 4 0 0 1 2.76-7.5l152 56a4 4 0 0 1 0 7.5l-152 56A3.9 3.9 0 0 1 56 164a4 4 0 0 1-1.38-7.75M208 196H56a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhGreaterThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
