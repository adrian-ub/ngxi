import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEgPaymentIcon],svg[arcticons-eg-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.5 5.5h-25a2 2 0 0 0-2 2v25c0 5.523 4.477 10 10 10h25a2 2 0 0 0 2-2v-25c0-5.523-4.477-10-10-10m-18 15.125h5.401"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.251 27.375H14.5V13.874h6.751M33.5 25.097a4.47 4.47 0 0 0-4.472-4.472h0a4.47 4.47 0 0 0-4.473 4.472v4.557a4.47 4.47 0 0 0 4.473 4.472h0a4.47 4.47 0 0 0 4.472-4.472h-4.472"></svg:path>`,
})
export class ArcticonsEgPaymentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
