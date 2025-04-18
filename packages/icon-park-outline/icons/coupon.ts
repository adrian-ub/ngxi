import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCouponIcon],svg[icon-park-outline-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 19.313V9h40v10.313a5.5 5.5 0 0 0-3.636 5.187A5.5 5.5 0 0 0 44 29.687V40H4V29.687A5.5 5.5 0 0 0 7.636 24.5A5.5 5.5 0 0 0 4 19.313Z"></svg:path><svg:path stroke-linecap="round" d="m19 16l5 5l5-5m-11 6h12m-12 6.167h12M24 22v12"></svg:path></svg:g>`,
})
export class IconParkOutlineCouponIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
