import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReceiptXThinIcon],svg[ph-receipt-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v152a4 4 0 0 0 5.79 3.58L64 196.47l30.21 15.11a4 4 0 0 0 3.58 0L128 196.47l30.21 15.11a4 4 0 0 0 3.58 0L192 196.47l30.21 15.11a4.05 4.05 0 0 0 1.79.42a4 4 0 0 0 4-4V56a12 12 0 0 0-12-12m4 157.53l-26.21-13.11a4 4 0 0 0-3.58 0L160 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L96 203.53l-30.21-15.11a4 4 0 0 0-3.58 0L36 201.53V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-65.17-102.7L133.66 120l21.17 21.17a4 4 0 0 1-5.66 5.66L128 125.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L122.34 120l-21.17-21.17a4 4 0 0 1 5.66-5.66L128 114.34l21.17-21.17a4 4 0 1 1 5.66 5.66"></svg:path>`,
})
export class PhReceiptXThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
