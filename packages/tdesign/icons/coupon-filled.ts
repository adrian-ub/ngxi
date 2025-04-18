import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCouponFilledIcon],svg[tdesign-coupon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h18V1.132l-3.946 2.63L14.5 1.72l-2.5 2l-2.5-2l-2.554 2.043L3 1.132zm14-9h-6v-2h6zM7 16v-2h10v2zm2.004-6v2.004H7V10z"></svg:path>`,
})
export class TdesignCouponFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
