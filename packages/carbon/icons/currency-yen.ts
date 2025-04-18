import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyYenIcon],svg[carbon-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.271 5H22l-6 11l-6-11H7.729l6.065 11H8v2h7v3H8v2h7v4h2v-4h7v-2h-7v-3h7v-2h-5.794z"></svg:path>`,
})
export class CarbonCurrencyYenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
