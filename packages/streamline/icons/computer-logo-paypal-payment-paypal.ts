import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLogoPaypalPaymentPaypalIcon],svg[streamline-computer-logo-paypal-payment-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.62 1.59L3.6.51a.49.49 0 0 0-.6.37L1.64 7.29L.63 12a.49.49 0 0 0 .37.58l1.2.26a.49.49 0 0 0 .58-.38l1-4.68l3.44.74a3.52 3.52 0 0 0 4.26-3.43a3.59 3.59 0 0 0-2.86-3.5ZM7.26 6.25l-3-.65l.55-2.6l3 .65a1.32 1.32 0 0 1-.56 2.58Z"></svg:path><svg:path d="m5.16 13.5l.62-2.9l3 .63c2.24.49 4.6-1.86 4.63-4.29a3.62 3.62 0 0 0-.2-1.19"></svg:path></svg:g>`,
})
export class StreamlineComputerLogoPaypalPaymentPaypalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
