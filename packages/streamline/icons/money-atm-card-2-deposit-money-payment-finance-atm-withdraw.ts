import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyAtmCard2DepositMoneyPaymentFinanceAtmWithdrawIcon],svg[streamline-money-atm-card-2-deposit-money-payment-finance-atm-withdraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 4.5A.5.5 0 0 1 .5 4V1A.5.5 0 0 1 1 .5h12a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5"></svg:path><svg:rect width="7" height="8" x="3.5" y="3" rx=".5"></svg:rect><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M3.5 13.5h7"></svg:path></svg:g>`,
})
export class StreamlineMoneyAtmCard2DepositMoneyPaymentFinanceAtmWithdrawIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
