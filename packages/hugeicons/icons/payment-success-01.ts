import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPaymentSuccess01Icon],svg[hugeicons-payment-success-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18.5s1 0 2 2c0 0 3.177-5 6-6m-16.5-3h-.009m5.509 8h-.5c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 16.807 2 15.037 2 11.5s0-5.306 1.053-6.487q.253-.284.554-.522C4.862 3.5 6.741 3.5 10.5 3.5h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C21.896 6.077 21.99 7.618 22 10.5v.5"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsPaymentSuccess01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
