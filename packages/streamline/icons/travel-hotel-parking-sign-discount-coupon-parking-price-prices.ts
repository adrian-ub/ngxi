import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelParkingSignDiscountCouponParkingPricePricesIcon],svg[streamline-travel-hotel-parking-sign-discount-coupon-parking-price-prices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="M5.5 3.5v7m0-3h2a2 2 0 0 0 0-4h-2"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelParkingSignDiscountCouponParkingPricePricesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
