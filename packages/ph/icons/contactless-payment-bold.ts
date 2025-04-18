import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phContactlessPaymentBoldIcon],svg[ph-contactless-payment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3a12 12 0 1 1-21.17-11.3a106.7 106.7 0 0 0 0-100.7a12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23a73 73 0 0 1 0 68.72a12 12 0 1 0 21.18 11.28a97 97 0 0 0 0-91.28a12 12 0 0 0-16.18-4.95M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"></svg:path>`,
})
export class PhContactlessPaymentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
