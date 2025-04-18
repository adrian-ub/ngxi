import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiWhiteLargeSquareIcon],svg[fluent-emoji-white-large-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2595id1)"><svg:path fill="url(#f2595id0)" d="M2.336 4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2z"></svg:path></svg:g><svg:defs><svg:lineargradient id="f2595id0" x1="16.336" x2="16.336" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F6E8FF"></svg:stop><svg:stop offset="1" stop-color="#BBA4D2"></svg:stop></svg:lineargradient><svg:filter id="f2595id1" width="30" height="30" x="1.336" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 1 0 0 0 0 0.996078 0 0 0 0 1 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_2811"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.658824 0 0 0 0 0.6 0 0 0 0 0.721569 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_2811" result="effect2_innerShadow_18590_2811"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.972549 0 0 0 0 0.952941 0 0 0 0 0.992157 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_2811" result="effect3_innerShadow_18590_2811"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-1"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.611765 0 0 0 0 0.439216 0 0 0 0 0.760784 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect3_innerShadow_18590_2811" result="effect4_innerShadow_18590_2811"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiWhiteLargeSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
