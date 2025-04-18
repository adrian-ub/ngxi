import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentLightIcon],svg[ph-contactless-payment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.31 101.2a57.37 57.37 0 0 1 0 53.6a6 6 0 0 1-10.62-5.6a44.75 44.75 0 0 0 0-42.4a6 6 0 1 1 10.62-5.6m47.86-34.49a6 6 0 0 0-2.46 8.12a112.67 112.67 0 0 1 0 106.34a6 6 0 1 0 10.58 5.66a124.65 124.65 0 0 0 0-117.66a6 6 0 0 0-8.12-2.46m-28 16a6 6 0 0 0-2.48 8.12a79 79 0 0 1 0 74.36a6 6 0 0 0 10.6 5.64a91 91 0 0 0 0-85.64a6 6 0 0 0-8.11-2.49ZM230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"></svg:path>`,
})
export class PhContactlessPaymentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
