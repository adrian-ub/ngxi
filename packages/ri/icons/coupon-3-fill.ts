import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoupon3FillIcon],svg[ri-coupon-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.005 21a1.5 1.5 0 1 0-3 0h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1.5 1.5 0 0 0 3 0h10a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1zm-1.5-10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiCoupon3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
