import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoupon4FillIcon],svg[ri-coupon-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.005 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0m-4-13v8h2V8zm10 0v8h2V8z"></svg:path>`,
})
export class RiCoupon4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
