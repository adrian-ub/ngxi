import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiGreenCircleIcon],svg[fluent-emoji-green-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f624id0)" d="M29.757 15.75c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f624id4)" d="M29.757 15.75c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f624id1)" d="M29.757 15.75c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f624id2)" d="M29.757 15.75c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f624id3)" d="M29.757 15.75c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:defs><svg:radialgradient id="f624id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 9.994 9.81)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop offset=".19" stop-color="#5AE68D"></svg:stop><svg:stop offset=".835" stop-color="#43A684"></svg:stop></svg:radialgradient><svg:radialgradient id="f624id1" cx="0" cy="0" r="1" gradientTransform="rotate(136.38 10.117 10.14)scale(14.6767 15.816)" gradientUnits="userSpaceOnUse"><svg:stop offset=".179" stop-color="#6FFCA5"></svg:stop><svg:stop offset="1" stop-color="#65E6A7" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f624id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.249 15.75)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#64CB85" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#A4E4B7"></svg:stop></svg:radialgradient><svg:radialgradient id="f624id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 22.1875 -22.9876 0 15.757 8.75)" gradientUnits="userSpaceOnUse"><svg:stop offset=".732" stop-color="#4A9795" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#718CAD"></svg:stop></svg:radialgradient><svg:lineargradient id="f624id4" x1="15.757" x2="15.757" y1="1.75" y2="8.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5ED284"></svg:stop><svg:stop offset="1" stop-color="#5ED284" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiGreenCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
