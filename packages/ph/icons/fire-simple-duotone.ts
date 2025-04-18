import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleDuotoneIcon],svg[ph-fire-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 144a80 80 0 0 1-160 0c0-30.57 14.42-58.26 31-80l33 32l26.27-72C159.86 41.92 208 88.15 208 144" opacity=".2"></svg:path><svg:path d="M143.38 17.85a8 8 0 0 0-12.63 3.41l-22 60.41l-24.16-23.41a8 8 0 0 0-11.93.89C51 87.53 40 116.08 40 144a88 88 0 0 0 176 0c0-59.45-50.79-108-72.62-126.15M128 216a72.08 72.08 0 0 1-72-72c0-22 8.09-44.79 24.06-67.84l26.37 25.58a8 8 0 0 0 13.09-3l22.27-61.07C164.21 58.08 200 97.91 200 144a72.08 72.08 0 0 1-72 72"></svg:path></svg:g>`,
})
export class PhFireSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
