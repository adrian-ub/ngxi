import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiOliveIcon],svg[fluent-emoji-olive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6FA352" d="M25.267 6.724c5.8 5.8 6.35 14.64 1.23 19.76s-13.96 4.57-19.76-1.23s-6.35-14.64-1.23-19.75s13.96-4.57 19.76 1.22"></svg:path><svg:path fill="url(#f1562id0)" d="M25.267 6.724c5.8 5.8 6.35 14.64 1.23 19.76s-13.96 4.57-19.76-1.23s-6.35-14.64-1.23-19.75s13.96-4.57 19.76 1.22"></svg:path><svg:path fill="url(#f1562id1)" d="M25.267 6.724c5.8 5.8 6.35 14.64 1.23 19.76s-13.96 4.57-19.76-1.23s-6.35-14.64-1.23-19.75s13.96-4.57 19.76 1.22"></svg:path><svg:path fill="url(#f1562id2)" d="M15.787 10.066c-2.119-.885-3.439-2.83-2.927-4.356c.504-1.517 2.632-2.033 4.759-1.158c2.127.876 3.439 2.83 2.926 4.357s-2.63 2.042-4.758 1.157"></svg:path><svg:path fill="#DB2956" d="M7.887 13.76c1.933 1.079 4.459.233 5.642-1.888s.576-4.715-1.357-5.793s-4.459-.233-5.642 1.888s-.576 4.715 1.357 5.793"></svg:path><svg:path fill="url(#f1562id3)" d="M7.887 13.76c1.933 1.079 4.459.233 5.642-1.888s.576-4.715-1.357-5.793s-4.459-.233-5.642 1.888s-.576 4.715 1.357 5.793"></svg:path><svg:defs><svg:radialgradient id="f1562id0" cx="0" cy="0" r="1" gradientTransform="rotate(109.654 6.684 13.877)scale(20.4408 24.43)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#91D060"></svg:stop><svg:stop offset=".458" stop-color="#6DAB32"></svg:stop><svg:stop offset="1" stop-color="#708D5D"></svg:stop></svg:radialgradient><svg:radialgradient id="f1562id1" cx="0" cy="0" r="1" gradientTransform="matrix(2.87498 42.75004 -108.3363 7.28571 14 4.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#596570" stop-opacity="0"></svg:stop><svg:stop offset=".311" stop-color="#5C6775" stop-opacity="0"></svg:stop><svg:stop offset=".698" stop-color="#616A7D"></svg:stop></svg:radialgradient><svg:radialgradient id="f1562id2" cx="0" cy="0" r="1" gradientTransform="rotate(-104.412 14.463 .194)scale(11.551 12.5002)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C8E4BE" stop-opacity="0"></svg:stop><svg:stop offset=".437" stop-color="#C8E4BE" stop-opacity="0"></svg:stop><svg:stop offset=".832" stop-color="#C8E4BE"></svg:stop></svg:radialgradient><svg:radialgradient id="f1562id3" cx="0" cy="0" r="1" gradientTransform="matrix(3.5625 -2.375 2.16411 3.24617 9.188 10.25)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E63B5F"></svg:stop><svg:stop offset="1" stop-color="#CC1138"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiOliveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
