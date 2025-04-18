import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCouponIcon],svg[icon-park-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 19.313V9H44V19.313C41.8815 20.068 40.3636 22.1053 40.3636 24.5C40.3636 26.8947 41.8815 28.932 44 29.687V40H4V29.687C6.11853 28.932 7.63636 26.8947 7.63636 24.5C7.63636 22.1053 6.11853 20.068 4 19.313Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 16L24 21L29 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 22H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28.1667H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V34"></svg:path></svg:g>`,
})
export class IconParkCouponIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
