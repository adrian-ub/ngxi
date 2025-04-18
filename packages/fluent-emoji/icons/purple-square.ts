import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiPurpleSquareIcon],svg[fluent-emoji-purple-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2133id1)"><svg:path fill="url(#f2133id0)" d="M2 4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2133id0" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7C47C1"></svg:stop><svg:stop offset="1" stop-color="#664BB5"></svg:stop></svg:lineargradient><svg:filter id="f2133id1" width="30" height="29" x="1" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.352941 0 0 0 0 0.192157 0 0 0 0 0.698039 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_3220"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.545098 0 0 0 0 0.384314 0 0 0 0 0.803922 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_3220" result="effect2_innerShadow_18590_3220"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.309804 0 0 0 0 0.235294 0 0 0 0 0.596078 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_3220" result="effect3_innerShadow_18590_3220"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiPurpleSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
