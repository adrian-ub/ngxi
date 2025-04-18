import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyGbpFillIcon],svg[ph-currency-gbp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 160H88a8 8 0 0 1 0-16a16 16 0 0 0 16-16v-16H88a8 8 0 0 1 0-16h16V96a40 40 0 0 1 60-34.64a8 8 0 0 1-8 13.85A24 24 0 0 0 120 96v24h16a8 8 0 0 1 0 16h-16v16a31.7 31.7 0 0 1-4.31 16H168a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhCurrencyGbpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
