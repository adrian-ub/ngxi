import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCouponOutlineIcon],svg[lsicon-coupon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 3v2.5m0 1V10m0 1v2m-4.5-.5h13V10C14 9.833 13 9.2 13 8c0-1.5 1.5-1.5 1.5-2V3.5h-13V6C2 6.167 3 6.8 3 8c0 1.5-1.5 1.5-1.5 2z"></svg:path>`,
})
export class LsiconCouponOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
