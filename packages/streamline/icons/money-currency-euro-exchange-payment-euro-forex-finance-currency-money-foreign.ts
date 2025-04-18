import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCurrencyEuroExchangePaymentEuroForexFinanceCurrencyMoneyForeignIcon],svg[streamline-money-currency-euro-exchange-payment-euro-forex-finance-currency-money-foreign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 12.59a5 5 0 0 1-2 .41a5.77 5.77 0 0 1-5.5-6A5.77 5.77 0 0 1 10 1a4.89 4.89 0 0 1 1.63.27M2 5.5h6m-6 3h6"></svg:path>`,
})
export class StreamlineMoneyCurrencyEuroExchangePaymentEuroForexFinanceCurrencyMoneyForeignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
