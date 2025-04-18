import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiRedSquareIcon],svg[fluent-emoji-red-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2185id1)"><svg:path fill="url(#f2185id0)" d="M2 4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2185id0" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D84278"></svg:stop><svg:stop offset="1" stop-color="#D83954"></svg:stop></svg:lineargradient><svg:filter id="f2185id1" width="30" height="28.75" x="1" y="1.25" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-.75"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.741176 0 0 0 0 0.12549 0 0 0 0 0.298039 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_2776"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.945098 0 0 0 0 0.333333 0 0 0 0 0.509804 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_2776" result="effect2_innerShadow_18590_2776"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.760784 0 0 0 0 0.188235 0 0 0 0 0.243137 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_2776" result="effect3_innerShadow_18590_2776"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiRedSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
