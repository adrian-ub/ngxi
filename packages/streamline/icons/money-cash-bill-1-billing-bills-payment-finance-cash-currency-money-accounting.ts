import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashBill1BillingBillsPaymentFinanceCashCurrencyMoneyAccountingIcon],svg[streamline-money-cash-bill-1-billing-bills-payment-finance-cash-currency-money-accounting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="4.5" r="1.5"></svg:circle><svg:path d="M1.5 11h11m-10 2.5h9"></svg:path></svg:g>`,
})
export class StreamlineMoneyCashBill1BillingBillsPaymentFinanceCashCurrencyMoneyAccountingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
