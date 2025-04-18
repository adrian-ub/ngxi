import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiWhiteCircleIcon],svg[fluent-emoji-white-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2590id5)"><svg:path fill="url(#f2590id0)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f2590id4)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f2590id1)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f2590id2)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path><svg:path fill="url(#f2590id3)" d="M29.547 16c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14"></svg:path></svg:g><svg:defs><svg:radialgradient id="f2590id0" cx="0" cy="0" r="1" gradientTransform="rotate(130.168 9.831 9.886)scale(27.8086)" gradientUnits="userSpaceOnUse"><svg:stop offset=".116" stop-color="#DFDDE1"></svg:stop><svg:stop offset=".853" stop-color="#C2A4DF"></svg:stop></svg:radialgradient><svg:radialgradient id="f2590id1" cx="0" cy="0" r="1" gradientTransform="matrix(-11.70929 10.4227 -9.62358 -10.81153 23.135 12.14)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FAEAFF" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="f2590id2" cx="0" cy="0" r="1" gradientTransform="matrix(-19.25 0 0 -20 20.04 16)" gradientUnits="userSpaceOnUse"><svg:stop offset=".62" stop-color="#BDB5C5" stop-opacity="0"></svg:stop><svg:stop offset=".951" stop-color="#D7D5D9"></svg:stop></svg:radialgradient><svg:radialgradient id="f2590id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 22.4376 -24.9172 0 15.547 9)" gradientUnits="userSpaceOnUse"><svg:stop offset=".725" stop-color="#B08DCF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#A283BF"></svg:stop></svg:radialgradient><svg:lineargradient id="f2590id4" x1="15.547" x2="15.547" y1="2" y2="7.637" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C4C4C5"></svg:stop><svg:stop offset="1" stop-color="#C4C4C5" stop-opacity="0"></svg:stop></svg:lineargradient><svg:filter id="f2590id5" width="28.25" height="28.25" x="1.297" y="1.75" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.25" dy="-.25"></svg:feoffset><svg:fegaussianblur stdDeviation="1"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.760784 0 0 0 0 0.729412 0 0 0 0 0.8 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_3113"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiWhiteCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
