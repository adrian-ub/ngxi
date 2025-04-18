import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiBlackMediumSquareIcon],svg[fluent-emoji-black-medium-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f137id1)"><svg:path fill="url(#f137id0)" d="M5 6.571C5 5.704 5.704 5 6.571 5H25.43c.866 0 1.57.704 1.57 1.571V25.43c0 .867-.704 1.571-1.571 1.571H6.57A1.57 1.57 0 0 1 5 25.429z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f137id0" x1="16" x2="16" y1="5" y2="27" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4C405A"></svg:stop><svg:stop offset="1" stop-color="#473B54"></svg:stop></svg:lineargradient><svg:filter id="f137id1" width="24" height="24" x="4" y="4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.407843 0 0 0 0 0.384314 0 0 0 0 0.443137 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_2821"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.258824 0 0 0 0 0.141176 0 0 0 0 0.356863 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_2821" result="effect2_innerShadow_18590_2821"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.223529 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_2821" result="effect3_innerShadow_18590_2821"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.278431 0 0 0 0 0.247059 0 0 0 0 0.317647 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect3_innerShadow_18590_2821" result="effect4_innerShadow_18590_2821"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiBlackMediumSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
