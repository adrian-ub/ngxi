import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiDiamondSuitIcon],svg[fluent-emoji-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f385id1)"><svg:path fill="url(#f385id0)" d="M14.378 2.772L4.523 14.555a2.27 2.27 0 0 0 0 2.898l9.855 11.782a2.102 2.102 0 0 0 3.244 0l9.855-11.782a2.27 2.27 0 0 0 0-2.898L17.622 2.772a2.09 2.09 0 0 0-3.244 0"></svg:path></svg:g><svg:defs><svg:lineargradient id="f385id0" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF3F64"></svg:stop><svg:stop offset="1" stop-color="#FD3DA2"></svg:stop></svg:lineargradient><svg:filter id="f385id1" width="26.5" height="28" x="2.75" y="2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1.25"></svg:feoffset><svg:fegaussianblur stdDeviation=".625"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.780392 0 0 0 0 0.219608 0 0 0 0 0.34902 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_4043"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1.25"></svg:feoffset><svg:fegaussianblur stdDeviation=".625"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 1 0 0 0 0 0.380392 0 0 0 0 0.560784 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18_4043" result="effect2_innerShadow_18_4043"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiDiamondSuitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
