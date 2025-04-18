import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSend24Icon],svg[fluent-color-send-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSend242)" d="M5.57 12L4.446 9l9.143 2.024c1.045.231 1.045 1.721 0 1.952L4.446 15z"></svg:path><svg:path fill="url(#fluentColorSend240)" d="m12.815 12.197l-7.532 1.256a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.943l18-9a.75.75 0 0 0 0-1.342l-18-9c-.614-.307-1.283.304-1.035.943l2.598 6.957a.5.5 0 0 0 .386.319l7.532 1.255a.2.2 0 0 1 0 .394"></svg:path><svg:path fill="url(#fluentColorSend241)" d="m12.815 12.197l-7.532 1.256a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.943l18-9a.75.75 0 0 0 0-1.342l-18-9c-.614-.307-1.283.304-1.035.943l2.598 6.957a.5.5 0 0 0 .386.319l7.532 1.255a.2.2 0 0 1 0 .394"></svg:path><svg:defs><svg:lineargradient id="fluentColorSend240" x1="2.246" x2="18.952" y1="-5.676" y2="16.518" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3BD5FF"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSend241" x1="11.997" x2="17.07" y1="7.505" y2="21.229" gradientUnits="userSpaceOnUse"><svg:stop offset=".125" stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset=".769" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorSend242" cx="0" cy="0" r="1" gradientTransform="matrix(8.00635 0 0 .89286 1.494 12)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2052CB"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorSend24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
