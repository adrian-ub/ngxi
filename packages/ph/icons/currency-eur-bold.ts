import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyEurBoldIcon],svg[ph-currency-eur-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.94 189.66a12 12 0 0 1-.94 17A84 84 0 0 1 53.55 160H40a12 12 0 0 1 0-24h12v-16H40a12 12 0 0 1 0-24h13.55A84 84 0 0 1 192 49.39a12 12 0 0 1-16 17.89A60 60 0 0 0 78.18 96H136a12 12 0 0 1 0 24H76v16h44a12 12 0 0 1 0 24H78.18A60 60 0 0 0 176 188.72a12 12 0 0 1 16.94.94"></svg:path>`,
})
export class PhCurrencyEurBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
