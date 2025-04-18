import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualDuotoneIcon],svg[ph-greater-than-or-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104L56 160V48Z" opacity=".2"></svg:path><svg:path d="M53.24 152.49L184.86 104L53.24 55.51a8 8 0 1 1 5.53-15l152 56a8 8 0 0 1 0 15l-152 56A8.1 8.1 0 0 1 56 168a8 8 0 0 1-2.76-15.51M208 192H56a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhGreaterThanOrEqualDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
