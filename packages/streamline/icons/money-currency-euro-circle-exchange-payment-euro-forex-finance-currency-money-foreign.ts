import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCurrencyEuroCircleExchangePaymentEuroForexFinanceCurrencyMoneyForeignIcon],svg[streamline-money-currency-euro-circle-exchange-payment-euro-forex-finance-currency-money-foreign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.8a2.59 2.59 0 0 1-1 .2a2.88 2.88 0 0 1-2.75-3A2.88 2.88 0 0 1 7.5 4a2.76 2.76 0 0 1 .82.13M3.5 6h3m-3 2h3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineMoneyCurrencyEuroCircleExchangePaymentEuroForexFinanceCurrencyMoneyForeignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
