import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyRupeeIcon],svg[carbon-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7V5H8v2h5.5a4.49 4.49 0 0 1 4.45 4H8v2h9.95a4.49 4.49 0 0 1-4.45 4H8v2.345L17.617 28l1.338-1.486L10.606 19H13.5a6.504 6.504 0 0 0 6.475-6H24v-2h-4.025a6.47 6.47 0 0 0-1.795-4Z"></svg:path>`,
})
export class CarbonCurrencyRupeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
