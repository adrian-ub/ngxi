import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiOrangeCircleIcon],svg[fluent-emoji-orange-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f1592id0)" d="M29.757 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f1592id4)" d="M29.757 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f1592id1)" d="M29.757 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f1592id2)" d="M29.757 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f1592id3)" d="M29.757 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:defs><svg:radialgradient id="f1592id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 9.936 9.935)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop offset=".232" stop-color="#FF8C46"></svg:stop><svg:stop offset="1" stop-color="#EE534A"></svg:stop></svg:radialgradient><svg:radialgradient id="f1592id1" cx="0" cy="0" r="1" gradientTransform="rotate(136.38 10.067 10.264)scale(14.6767 15.816)" gradientUnits="userSpaceOnUse"><svg:stop offset=".179" stop-color="#FFA35F"></svg:stop><svg:stop offset="1" stop-color="#FF8544" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f1592id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.249 16)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#E77049" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#FFA693"></svg:stop></svg:radialgradient><svg:radialgradient id="f1592id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 21 -23.3208 0 15.757 9)" gradientUnits="userSpaceOnUse"><svg:stop offset=".863" stop-color="#EE4C57" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#EC5B84"></svg:stop></svg:radialgradient><svg:lineargradient id="f1592id4" x1="15.757" x2="15.757" y1="2" y2="8.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF7E51"></svg:stop><svg:stop offset="1" stop-color="#EF4B5E" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF7E51" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiOrangeCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
