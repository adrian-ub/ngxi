import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon],svg[streamline-interface-edit-cut-coupon-cut-discount-price-prices-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.49 10.5h2m2 0h2M2.19 4.93l5.8 3.33"></svg:path><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:path d="M2.19 9.07L13.5 2.55"></svg:path><svg:circle cx="2.75" cy="11.25" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
