import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashDollarCoinAccountingBillingPaymentCashCoinCurrencyMoneyFinanceIcon],svg[streamline-money-cash-dollar-coin-accounting-billing-payment-cash-coin-currency-money-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.5V3M5.5 8.5c0 .75.67 1 1.5 1s1.5 0 1.5-1c0-1.5-3-1.5-3-3c0-1 .67-1 1.5-1s1.5.38 1.5 1M7 9.5V11"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineMoneyCashDollarCoinAccountingBillingPaymentCashCoinCurrencyMoneyFinanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
