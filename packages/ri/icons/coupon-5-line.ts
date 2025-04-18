import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoupon5LineIcon],svg[ri-coupon-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.005 14v7a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4m-2 1.465a4 4 0 0 1-2-3.465c0-1.48.804-2.773 2-3.465V4h-14v4.535a4 4 0 0 1 0 6.93V20h14zM9.005 6h6v2h-6zm0 10h6v2h-6z"></svg:path>`,
})
export class RiCoupon5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
