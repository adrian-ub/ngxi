import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyRubleIcon],svg[carbon-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-9v11H7v2h3v3H7v2h3v6h2v-6h9v-2h-9v-3h7a6.007 6.007 0 0 0 6-6v-1a6.007 6.007 0 0 0-6-6m4 7a4.005 4.005 0 0 1-4 4h-7V6h7a4.005 4.005 0 0 1 4 4Z"></svg:path>`,
})
export class CarbonCurrencyRubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
