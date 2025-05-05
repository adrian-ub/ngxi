import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCouponIcon],svg[picon-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h1l3-4H5m0 3v1h1V5M2 2v1h1V2m5 1l-1 .5v1L8 5v2H0V5l1-.5v-1L0 3V1h8"></svg:path>`,
})
export class PiconCouponIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
