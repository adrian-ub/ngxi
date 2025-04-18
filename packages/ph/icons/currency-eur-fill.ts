import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurFillIcon],svg[ph-currency-eur-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 80a8 8 0 0 1 0 16H88v16h24a8 8 0 0 1 0 16H88.81a40 40 0 0 0 65.86 21.82a8 8 0 1 1 10.66 11.92A56 56 0 0 1 72.58 152H64a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h8.58a56 56 0 0 1 92.75-33.74a8 8 0 1 1-10.66 11.92A40 40 0 0 0 88.81 104Z"></svg:path>`,
})
export class PhCurrencyEurFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
