import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBoard16Icon],svg[fluent-color-board-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBoard160)" d="m14 10l-3-1l-3 1l-1 2l1 2h3.5a2.5 2.5 0 0 0 2.5-2.5z"></svg:path><svg:path fill="url(#fluentColorBoard161)" d="M8 2L7 6l1 4h6V4.5A2.5 2.5 0 0 0 11.5 2z"></svg:path><svg:path fill="url(#fluentColorBoard162)" d="M8 14V6L5 5L2 6v5.5A2.5 2.5 0 0 0 4.5 14z"></svg:path><svg:path fill="url(#fluentColorBoard163)" d="M8 2v4H2V4.5A2.5 2.5 0 0 1 4.5 2z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBoard160" x1="4.667" x2="8.327" y1="7.182" y2="15.777" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#52D17C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard161" x1="8.4" x2="13.077" y1="2.889" y2="9.103" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#309C61"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard162" x1="2.857" x2="8.01" y1="6.421" y2="11.174" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B870"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorBoard163" x1="2.857" x2="4.433" y1="2.8" y2="6.881" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B0F098"></svg:stop><svg:stop offset="1" stop-color="#64DE89"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBoard16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
