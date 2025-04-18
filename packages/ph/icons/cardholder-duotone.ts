import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCardholderDuotoneIcon],svg[ph-cardholder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v48h-64a32 32 0 0 1-64 0H32V72a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24M40 96h176v16h-56a8 8 0 0 0-8 8a24 24 0 0 1-48 0a8 8 0 0 0-8-8H40Zm8-32h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-56h48.8a40 40 0 0 0 78.4 0H216v56a8 8 0 0 1-8 8"></svg:path></svg:g>`,
})
export class PhCardholderDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
