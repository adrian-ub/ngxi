import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyIcon],svg[carbon-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-2h-4V7h-2v3h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6v3h-8v2h4v3h2v-3h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-6v-3Z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12.035 12.035 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14.04 14.04 0 0 0 16 2"></svg:path>`,
})
export class CarbonCurrencyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
