import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCouponSolidIcon],svg[streamline-discount-percent-coupon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 11c0 .828.67 1.5 1.498 1.5h11.004C13.33 12.5 14 11.828 14 11V8.966a.5.5 0 0 0-.369-.483a1.537 1.537 0 0 1 0-2.966a.5.5 0 0 0 .369-.483V3c0-.828-.67-1.5-1.498-1.5H1.498C.67 1.5 0 2.172 0 3v2.03a.5.5 0 0 0 .373.483a1.537 1.537 0 0 1 0 2.974A.5.5 0 0 0 0 8.97zm4.962-1.058l5-5a.625.625 0 0 0-.883-.884l-5 5a.625.625 0 1 0 .883.884M4.021 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDiscountPercentCouponSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
