import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyAtmCard1CreditPayPaymentDebitCardFinancePlasticMoneyIcon],svg[streamline-money-atm-card-1-credit-pay-payment-debit-card-finance-plastic-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9.5" x=".5" y="2.25" rx="1"></svg:rect><svg:path d="M.5 5.75h13m-4 3.5H11"></svg:path></svg:g>`,
})
export class StreamlineMoneyAtmCard1CreditPayPaymentDebitCardFinancePlasticMoneyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
