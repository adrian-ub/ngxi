import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrandyBoldIcon],svg[ph-brandy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 88a99.63 99.63 0 0 0-16.18-54.55a12 12 0 0 0-10-5.45H54.23a12 12 0 0 0-10 5.45A99.63 99.63 0 0 0 28 88a100.15 100.15 0 0 0 88 99.28V212H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-24.72A100.15 100.15 0 0 0 228 88M61.05 52H195a75.4 75.4 0 0 1 8.1 24H53a75.4 75.4 0 0 1 8.05-24m67 112a76.12 76.12 0 0 1-75-64H203a76.12 76.12 0 0 1-75 64Z"></svg:path>`,
})
export class PhBrandyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
