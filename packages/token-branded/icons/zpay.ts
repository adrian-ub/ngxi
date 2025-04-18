import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZpayIcon],svg[token-branded-zpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#11F" d="M16.103 4.059H6.97c-.382 0-.795.301-.795.667v1.842c0 .37.413.667.795.667h5.304L3 15.705h4.463l9.868-8.809c1.059-1.059.291-2.837-1.228-2.837M7.897 19.94h9.397c.381 0 .53-.302.53-.667V17.43c0-.37-.149-.667-.53-.667h-5.57L21 8.294h-4.463l-9.868 8.81c-1.059 1.058-.291 2.837 1.228 2.837"></svg:path>`,
})
export class TokenBrandedZpayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
