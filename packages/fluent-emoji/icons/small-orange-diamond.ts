import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiSmallOrangeDiamondIcon],svg[fluent-emoji-small-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2337id1)"><svg:path fill="url(#f2337id0)" d="M10.1 17.357a.976.976 0 0 1 0-1.38l5.524-5.524a.976.976 0 0 1 1.38 0l5.524 5.523c.382.381.382 1 0 1.38l-5.523 5.525a.976.976 0 0 1-1.381 0z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2337id0" x1="13.648" x2="19.628" y1="14.133" y2="20.663" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F47947"></svg:stop><svg:stop offset="1" stop-color="#EF5D50"></svg:stop></svg:lineargradient><svg:filter id="f2337id1" width="14" height="14" x="9.314" y="9.666" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.5"></svg:feoffset><svg:fegaussianblur stdDeviation=".25"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.917647 0 0 0 0 0.305882 0 0 0 0 0.305882 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_2901"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".5"></svg:feoffset><svg:fegaussianblur stdDeviation=".25"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.862745 0 0 0 0 0.396078 0 0 0 0 0.243137 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_2901" result="effect2_innerShadow_18590_2901"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".5" dy="-.5"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.843137 0 0 0 0 0.282353 0 0 0 0 0.360784 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_2901" result="effect3_innerShadow_18590_2901"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.5" dy=".5"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 1 0 0 0 0 0.592157 0 0 0 0 0.356863 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect3_innerShadow_18590_2901" result="effect4_innerShadow_18590_2901"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiSmallOrangeDiamondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
