import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGenderNonbinaryDuotoneIcon],svg[ph-gender-nonbinary-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 168a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M136 96.46V62.13l27.88 16.73a8 8 0 1 0 8.24-13.72L143.55 48l28.57-17.14a8 8 0 0 0-8.24-13.72L128 38.67L92.12 17.14a8 8 0 0 0-8.24 13.72L112.45 48L83.88 65.14a8 8 0 0 0 8.24 13.72L120 62.13v34.33a72 72 0 1 0 16 0M128 224a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56"></svg:path></svg:g>`,
})
export class PhGenderNonbinaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
