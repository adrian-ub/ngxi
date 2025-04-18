import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashBill3AccountingBillingPaymentFinanceCashCurrencyMoneyBillIcon],svg[streamline-money-cash-bill-3-accounting-billing-payment-finance-cash-currency-money-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="8" x=".5" y="1.75" rx="1"></svg:rect><svg:circle cx="5.75" cy="5.75" r="1.5"></svg:circle><svg:path d="M3.5 12.25h9a1 1 0 0 0 1-1v-5"></svg:path></svg:g>`,
})
export class StreamlineMoneyCashBill3AccountingBillingPaymentFinanceCashCurrencyMoneyBillIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
