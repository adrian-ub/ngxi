import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSparkasseMobilePaymentIcon],svg[arcticons-sparkasse-mobile-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.617" height="16.106" x="5.941" y="26.394" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.092" ry="3.092"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.283 31.763h14.275M5.941 37.131h14.275"></svg:path><svg:circle cx="15.238" cy="23.302" r="3.092" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.825 18.896c.485-.546.788-1.257.788-2.045s-.303-1.498-.788-2.044m4.285 7.191c1.221-1.375 1.985-3.164 1.985-5.147s-.764-3.772-1.984-5.146M33.396 25.1c1.956-2.203 3.18-5.07 3.18-8.249s-1.224-6.046-3.18-8.249m4.286 19.601c2.691-3.032 4.377-6.979 4.377-11.352S40.373 8.531 37.682 5.5"></svg:path>`,
})
export class ArcticonsSparkasseMobilePaymentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
