import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyCashBill2CurrencyBillingPaymentFinanceCashBillMoneyAccountingIcon],svg[streamline-money-cash-bill-2-currency-billing-payment-finance-cash-bill-money-accounting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx="1"></svg:rect><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M3 5h.5m7 4h.5"></svg:path></svg:g>`,
})
export class StreamlineMoneyCashBill2CurrencyBillingPaymentFinanceCashBillMoneyAccountingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
