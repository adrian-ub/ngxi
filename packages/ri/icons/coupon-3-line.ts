import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoupon3LineIcon],svg[ri-coupon-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zM8.09 19a1.5 1.5 0 0 1 2.83 0h9.085v-2.968a4.5 4.5 0 0 1 0-8.064V5H10.92a1.5 1.5 0 0 1-2.83 0H4.005v14zm1.415-8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiCoupon3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
