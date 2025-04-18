import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualBoldIcon],svg[ph-less-than-or-equal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 104a12 12 0 0 1 7.85-11.26l152-56a12 12 0 1 1 8.3 22.52L82.71 104l121.44 44.74A12 12 0 0 1 200 172a11.9 11.9 0 0 1-4.15-.74l-152-56A12 12 0 0 1 36 104m164 84H48a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhLessThanOrEqualBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
