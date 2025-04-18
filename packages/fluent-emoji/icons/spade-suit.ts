import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSpadeSuitIcon],svg[fluent-emoji-spade-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2368id1)"><svg:path fill="url(#f2368id0)" d="M28.43 14.965L18.713 3.35a3.79 3.79 0 0 0-5.8 0l-9.72 11.615c-3.212 3.839-.463 9.657 4.562 9.657a5.96 5.96 0 0 0 5.408-3.459l.645-1.41v3.17c0 2.099-1.692 3.798-3.797 3.838h-.08c-.897 0-1.632.73-1.632 1.62S9.034 30 9.931 30h11.772c.896 0 1.632-.73 1.632-1.62s-.736-1.619-1.632-1.619h-.08c-2.105-.04-3.797-1.74-3.797-3.838v-3.17l.645 1.41c.956 2.11 3.071 3.459 5.407 3.459c5.016 0 7.765-5.818 4.552-9.657"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2368id0" x1="24.129" x2="11.266" y1="11.078" y2="29.196" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#534165"></svg:stop><svg:stop offset="1" stop-color="#3F3946"></svg:stop></svg:lineargradient><svg:filter id="f2368id1" width="29.75" height="29.5" x=".812" y="1.25" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.427451 0 0 0 0 0.372549 0 0 0 0 0.482353 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_4023"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".75" dy="-.75"></svg:feoffset><svg:fegaussianblur stdDeviation=".625"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.172549 0 0 0 0 0.109804 0 0 0 0 0.227451 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18_4023" result="effect2_innerShadow_18_4023"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".75" dy=".75"></svg:feoffset><svg:fegaussianblur stdDeviation=".625"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.196078 0 0 0 0 0.192157 0 0 0 0 0.2 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18_4023" result="effect3_innerShadow_18_4023"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiSpadeSuitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
