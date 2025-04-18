import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpDuotoneIcon],svg[ph-currency-gbp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 208H60a36 36 0 0 0 36-36V84a44 44 0 0 1 72-33.95Z" opacity=".2"></svg:path><svg:path d="M192 208a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h4a28 28 0 0 0 28-28v-36H56a8 8 0 0 1 0-16h32V84a52 52 0 0 1 85.08-40.12a8 8 0 1 1-10.18 12.34A36 36 0 0 0 104 84v36h32a8 8 0 0 1 0 16h-32v36a43.82 43.82 0 0 1-10.08 28H184a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCurrencyGbpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
