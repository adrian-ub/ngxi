import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyInrBoldIcon],svg[ph-currency-inr-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 80a12 12 0 0 1-12 12h-28a64.07 64.07 0 0 1-64 64h-5l65 59.12a12 12 0 1 1-16.14 17.76l-88-80A12 12 0 0 1 72 132h36a40 40 0 0 0 40-40H72a12 12 0 0 1 0-24h68a40 40 0 0 0-32-16H72a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24h-42.09a64 64 0 0 1 9.4 16H200a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhCurrencyInrBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
