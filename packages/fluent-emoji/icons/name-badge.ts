import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiNameBadgeIcon],svg[fluent-emoji-name-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f1483id2)"><svg:path fill="url(#f1483id0)" d="M15.97 3.888c-.384 0-.609.242-.766.418l-3.49 3.978a1 1 0 0 1-1.489 0L7.252 4.973c-.37-.412-1.007-.447-1.39-.048a13.95 13.95 0 0 0-3.893 9.687c0 7.732 6.268 14 14 14s14-6.268 14-14c0-3.759-1.481-7.172-3.892-9.687c-.383-.4-1.02-.364-1.39.048l-2.974 3.31a1 1 0 0 1-1.488 0L16.74 4.307c-.153-.17-.36-.418-.77-.418"></svg:path></svg:g><svg:path fill="url(#f1483id1)" d="M5.97 15.612a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1z"></svg:path><svg:defs><svg:lineargradient id="f1483id0" x1="15.969" x2="15.969" y1="3.888" y2="28.612" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF4E92"></svg:stop><svg:stop offset="1" stop-color="#F54C5B"></svg:stop></svg:lineargradient><svg:lineargradient id="f1483id1" x1="15.969" x2="15.969" y1="15.312" y2="18.612" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E7D8FC"></svg:stop><svg:stop offset="1" stop-color="#F5EFFF"></svg:stop></svg:lineargradient><svg:filter id="f1483id2" width="29" height="25.224" x="1.469" y="3.388" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.75"></svg:feoffset><svg:fegaussianblur stdDeviation=".25"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 1 0 0 0 0 0.466667 0 0 0 0 0.670588 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_1959"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-.5"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.87451 0 0 0 0 0.14902 0 0 0 0 0.356863 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_1959" result="effect2_innerShadow_18590_1959"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".5"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.901961 0 0 0 0 0.164706 0 0 0 0 0.313726 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_1959" result="effect3_innerShadow_18590_1959"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiNameBadgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
