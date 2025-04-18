import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoneyAtmCard3DepositMoneyPaymentFinanceAtmWithdrawIcon],svg[streamline-money-atm-card-3-deposit-money-payment-finance-atm-withdraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="7" x=".5" y="6.5" rx="1"></svg:rect><svg:path d="M3.5 2v2M7 .5V4m3.5-2v2"></svg:path><svg:circle cx="7" cy="10" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineMoneyAtmCard3DepositMoneyPaymentFinanceAtmWithdrawIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
