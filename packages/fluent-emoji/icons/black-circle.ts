import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiBlackCircleIcon],svg[fluent-emoji-black-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f133id0)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f133id4)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f133id1)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f133id2)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f133id3)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:defs><svg:radialgradient id="f133id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 9.831 9.886)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#645B70"></svg:stop><svg:stop offset=".662" stop-color="#33293D"></svg:stop></svg:radialgradient><svg:radialgradient id="f133id1" cx="0" cy="0" r="1" gradientTransform="matrix(-9.47663 8.74999 -8.07914 -8.75007 24.227 10.75)" gradientUnits="userSpaceOnUse"><svg:stop offset=".113" stop-color="#6A6571"></svg:stop><svg:stop offset="1" stop-color="#49474C" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f133id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.04 16)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#434344" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#8C8B8D"></svg:stop></svg:radialgradient><svg:radialgradient id="f133id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 21.8837 -24.3022 0 15.547 9)" gradientUnits="userSpaceOnUse"><svg:stop offset=".853" stop-color="#352343" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#50405F"></svg:stop></svg:radialgradient><svg:lineargradient id="f133id4" x1="15.547" x2="15.547" y1="2" y2="8.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#554A63"></svg:stop><svg:stop offset="1" stop-color="#554A63" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiBlackCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
