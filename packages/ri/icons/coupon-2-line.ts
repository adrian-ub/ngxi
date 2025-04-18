import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoupon2LineIcon],svg[ri-coupon-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5m12-4.5h-10v2.968a4.5 4.5 0 0 1 0 8.064V19h10zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5z"></svg:path>`,
})
export class RiCoupon2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
