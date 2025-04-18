import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyIranianRialIcon],svg[tabler-currency-iranian-rial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 4v9a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1m9-6v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1m5 3v1.096a5 5 0 0 1-3.787 4.85L17 20m-6-2h.01M14 18h.01"></svg:path>`,
})
export class TablerCurrencyIranianRialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
