import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiYellowCircleIcon],svg[fluent-emoji-yellow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f3110id0)" d="M29.757 15.875c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f3110id4)" d="M29.757 15.875c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f3110id1)" d="M29.757 15.875c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f3110id2)" d="M29.757 15.875c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f3110id3)" d="M29.757 15.875c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:defs><svg:radialgradient id="f3110id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 9.965 9.872)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop offset=".232" stop-color="#F3BB4B"></svg:stop><svg:stop offset=".959" stop-color="#C79738"></svg:stop></svg:radialgradient><svg:radialgradient id="f3110id1" cx="0" cy="0" r="1" gradientTransform="rotate(136.38 10.092 10.202)scale(14.6767 15.816)" gradientUnits="userSpaceOnUse"><svg:stop offset=".179" stop-color="#FFE764"></svg:stop><svg:stop offset="1" stop-color="#F8CA4D" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f3110id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.249 15.875)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#C69B40" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#E8C290"></svg:stop></svg:radialgradient><svg:radialgradient id="f3110id3" cx="0" cy="0" r="1" gradientTransform="scale(23.3208 21)rotate(90 .127 .55)" gradientUnits="userSpaceOnUse"><svg:stop offset=".792" stop-color="#E5A152" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#D17887"></svg:stop></svg:radialgradient><svg:lineargradient id="f3110id4" x1="15.757" x2="15.757" y1="1.875" y2="8.375" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E1B45D"></svg:stop><svg:stop offset="1" stop-color="#E1B45D" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiYellowCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
