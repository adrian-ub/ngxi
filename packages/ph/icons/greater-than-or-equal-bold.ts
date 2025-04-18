import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGreaterThanOrEqualBoldIcon],svg[ph-greater-than-or-equal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.85 148.74L173.29 104L51.85 59.26a12 12 0 0 1 8.3-22.52l152 56a12 12 0 0 1 0 22.52l-152 56a12 12 0 1 1-8.3-22.52M208 188H56a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhGreaterThanOrEqualBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
