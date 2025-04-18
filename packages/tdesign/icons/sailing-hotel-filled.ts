import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSailingHotelFilledIcon],svg[tdesign-sailing-hotel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.171 1.015L7 .81V6h9.019c-1.593-2.441-4.11-4.335-7.848-4.985M17.079 8H7v3h10.996a15.7 15.7 0 0 0-.917-3m1.211 5H7v3h11.36c.043-.964.027-1.976-.07-3m-.113 5H7v3H4v2h17v-2h-3.492c.283-.858.515-1.885.67-3"></svg:path>`,
})
export class TdesignSailingHotelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
