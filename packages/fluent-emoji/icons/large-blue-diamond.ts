import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiLargeBlueDiamondIcon],svg[fluent-emoji-large-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f830id1)"><svg:path fill="url(#f830id0)" d="M3.608 18.353a2 2 0 0 1 0-2.829L14.922 4.211a2 2 0 0 1 2.829 0l11.313 11.314a2 2 0 0 1 0 2.828L17.751 29.667a2 2 0 0 1-2.829 0z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f830id0" x1="10.875" x2="23.125" y1="11.75" y2="25.125" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3D8BDD"></svg:stop><svg:stop offset="1" stop-color="#437FDB"></svg:stop></svg:lineargradient><svg:filter id="f830id1" width="28.627" height="28.127" x="2.023" y="2.875" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.25098 0 0 0 0 0.462745 0 0 0 0 0.831373 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_2891"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.176471 0 0 0 0 0.521569 0 0 0 0 0.803922 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_2891" result="effect2_innerShadow_18590_2891"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".75" dy="-.75"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.231373 0 0 0 0 0.352941 0 0 0 0 0.784314 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_2891" result="effect3_innerShadow_18590_2891"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.75" dy=".75"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.329412 0 0 0 0 0.698039 0 0 0 0 0.952941 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect3_innerShadow_18590_2891" result="effect4_innerShadow_18590_2891"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiLargeBlueDiamondIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
