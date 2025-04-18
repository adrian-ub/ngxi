import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaymentWireless24FilledIcon],svg[fluent-payment-wireless-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.657-5.792a.85.85 0 0 0-1.113 0a.664.664 0 0 0 0 1.006c2.923 2.643 2.923 6.928 0 9.571a.664.664 0 0 0 0 1.006a.85.85 0 0 0 1.113 0c3.538-3.198 3.538-8.384 0-11.583m-4.126 1.514a.77.77 0 0 0 0 1.072c1.734 1.771 1.734 4.643 0 6.415a.77.77 0 0 0 0 1.072a.73.73 0 0 0 1.05 0c2.313-2.364 2.313-6.196 0-8.559a.73.73 0 0 0-1.05 0M8.302 9.216a.78.78 0 0 0-1.079 0a.72.72 0 0 0 0 1.042a2.404 2.404 0 0 1 0 3.483a.72.72 0 0 0 0 1.043a.78.78 0 0 0 1.08 0a3.843 3.843 0 0 0 0-5.568"></svg:path>`,
})
export class FluentPaymentWireless24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
