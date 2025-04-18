import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHeavyDollarSignIcon],svg[fluent-emoji-heavy-dollar-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f691id1)"><svg:path fill="url(#f691id0)" d="M22.863 20.255c0-2.766-1.91-6.46-6.89-6.46c-2.85 0-3.24-1.74-3.27-2.39c.03-.81.4-2.69 3.23-2.69c2.94 0 3.28 2.07 3.31 2.71c.03.99.88 1.84 1.85 1.75c1-.02 1.79-.85 1.76-1.85c-.048-2.088-1.384-5.01-4.702-5.931a.525.525 0 0 1-.391-.508l.023-1.361c.01-1-.79-1.82-1.79-1.83h-.02c-.99 0-1.8.8-1.81 1.79l-.015 1.4a.525.525 0 0 1-.395.494c-3.35.902-4.65 3.867-4.67 6.016c.04 2.42 1.91 6.02 6.89 6.02c2.81 0 3.27 2.028 3.27 2.8c0 .518-.54 2.28-3.27 2.28c-2.77 0-3.21-1.86-3.28-2.41c-.09-1-.95-1.72-1.97-1.64c-1 .09-1.73.97-1.64 1.96c.144 1.646 1.346 4.526 4.676 5.425a.525.525 0 0 1 .394.5v1.665c0 1 .81 1.81 1.81 1.81s1.82-.81 1.82-1.81V26.33a.53.53 0 0 1 .394-.503c2.416-.683 4.686-2.95 4.686-5.573"></svg:path></svg:g><svg:defs><svg:lineargradient id="f691id0" x1="15.969" x2="15.969" y1="1.695" y2="29.805" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#64DE9D"></svg:stop><svg:stop offset="1" stop-color="#51C284"></svg:stop></svg:lineargradient><svg:filter id="f691id1" width="14.287" height="28.61" x="8.826" y="1.445" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.25" dy=".25"></svg:feoffset><svg:fegaussianblur stdDeviation=".25"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.505882 0 0 0 0 0.976471 0 0 0 0 0.694118 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_1877"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".25"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.239216 0 0 0 0 0.701961 0 0 0 0 0.411765 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18590_1877" result="effect2_innerShadow_18590_1877"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".25" dy="-.25"></svg:feoffset><svg:fegaussianblur stdDeviation=".375"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.168627 0 0 0 0 0.576471 0 0 0 0 0.360784 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18590_1877" result="effect3_innerShadow_18590_1877"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiHeavyDollarSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
