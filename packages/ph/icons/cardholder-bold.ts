import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCardholderBoldIcon],svg[ph-cardholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V72a28 28 0 0 0-28-28M48 68h160a4 4 0 0 1 4 4v16h-52a12 12 0 0 0-12 12a20 20 0 0 1-40 0a12 12 0 0 0-12-12H44V72a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-72h41.66a44 44 0 0 0 84.68 0H212v72a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCardholderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
