import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaymentCashOut3Icon],svg[streamline-payment-cash-out-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5v2m2.5-3v2m-5-2v2m8-12h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 6.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m-4.225-1.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.45.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePaymentCashOut3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
