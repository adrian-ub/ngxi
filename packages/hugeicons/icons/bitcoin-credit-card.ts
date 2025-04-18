import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinCreditCardIcon],svg[hugeicons-bitcoin-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11c0-3.537 0-5.306-1.053-6.487a4.4 4.4 0 0 0-.555-.522C19.138 3 17.26 3 13.5 3h-3c-3.759 0-5.638 0-6.893.99q-.301.24-.554.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487q.253.284.554.522C4.862 19 6.741 19 10.5 19H12M2 8h20"></svg:path><svg:path d="M16.125 19.5v-6m1.875 0V12m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H15m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H15"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
