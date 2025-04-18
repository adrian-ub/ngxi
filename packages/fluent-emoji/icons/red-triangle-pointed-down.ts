import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiRedTrianglePointedDownIcon],svg[fluent-emoji-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2187id1)"><svg:path fill="url(#f2187id0)" d="m15.174 21.274l-5.61-9.806a1.25 1.25 0 0 1 1.085-1.87h11.375a1.25 1.25 0 0 1 1.078 1.883l-5.766 9.805a1.25 1.25 0 0 1-2.162-.013"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2187id0" x1="14.379" x2="14.379" y1="9.597" y2="20.725" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DD3859"></svg:stop><svg:stop offset="1" stop-color="#D63983"></svg:stop></svg:lineargradient><svg:filter id="f2187id1" width="15.88" height="13.806" x="8.397" y="8.597" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1" dy=".5"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.964706 0 0 0 0 0.384314 0 0 0 0 0.54902 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_3123"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.768627 0 0 0 0 0.129412 0 0 0 0 0.560784 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_3123" result="effect2_innerShadow_18590_3123"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1" dy=".5"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.815686 0 0 0 0 0.247059 0 0 0 0 0.376471 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_3123" result="effect3_innerShadow_18590_3123"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiRedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
