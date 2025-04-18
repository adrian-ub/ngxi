import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiBlueCircleIcon],svg[fluent-emoji-blue-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f146id0)" d="M29.757 15.625c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f146id4)" d="M29.757 15.625c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f146id1)" d="M29.757 15.625c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f146id2)" d="M29.757 15.625c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f146id3)" d="M29.757 15.625c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:defs><svg:radialgradient id="f146id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 10.023 9.747)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop offset=".116" stop-color="#4DA0DA"></svg:stop><svg:stop offset=".853" stop-color="#3557C3"></svg:stop></svg:radialgradient><svg:radialgradient id="f146id1" cx="0" cy="0" r="1" gradientTransform="rotate(136.38 10.142 10.077)scale(14.6767 15.816)" gradientUnits="userSpaceOnUse"><svg:stop offset=".179" stop-color="#62A5E9"></svg:stop><svg:stop offset="1" stop-color="#4579D7" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f146id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.249 15.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#416AA9" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#859BC6"></svg:stop></svg:radialgradient><svg:radialgradient id="f146id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 21 -23.3208 0 15.757 8.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".863" stop-color="#3E4DCB" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#695FD4"></svg:stop></svg:radialgradient><svg:lineargradient id="f146id4" x1="15.757" x2="15.757" y1="1.625" y2="8.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5B9CCE"></svg:stop><svg:stop offset="1" stop-color="#5B9CCE" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiBlueCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
