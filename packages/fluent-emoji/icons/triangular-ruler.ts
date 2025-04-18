import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiTriangularRulerIcon],svg[fluent-emoji-triangular-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2509id1)"><svg:path fill="url(#f2509id0)" fill-rule="evenodd" d="M6.204 2.802C4.693 1.29 2.106 2.36 2.106 4.498v23.409a2 2 0 0 0 2 2H27.49c2.137 0 3.208-2.584 1.698-4.097zm1.7 20.43v-6.913a.75.75 0 0 1 1.282-.528l6.856 6.913a.75.75 0 0 1-.533 1.278H8.654a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="#9D73E9" d="M7.182 3.781L5.241 5.722a.53.53 0 1 1-.75-.75l1.942-1.94zm4.709 4.714l-1.9 1.9a.53.53 0 0 0 .75.75l1.9-1.9zm5.466 5.472l-1.865 1.865a.53.53 0 0 0 .749.75l1.865-1.865zm5.489 5.495l-1.855 1.855a.53.53 0 0 0 .75.75l1.854-1.855zm5.427 5.433l-1.844 1.843a.53.53 0 0 0 .75.75l1.843-1.843zm-3.516-1.99a.53.53 0 1 1 .75.75l-.75.749a.53.53 0 1 1-.75-.75zM19.35 17.42a.53.53 0 1 1 .75.75l-.75.75a.53.53 0 0 1-.75-.75zm-5.468-5.453a.53.53 0 1 1 .75.75l-.75.75a.53.53 0 1 1-.75-.75zM8.397 6.514a.53.53 0 0 1 .75.75l-.75.75a.53.53 0 0 1-.75-.75z"></svg:path><svg:defs><svg:lineargradient id="f2509id0" x1="18.872" x2="8.122" y1="16.373" y2="26.81" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C3C1CA"></svg:stop><svg:stop offset="1" stop-color="#B4B1BB"></svg:stop></svg:lineargradient><svg:filter id="f2509id1" width="28.387" height="28.413" x="1.806" y="1.793" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".3" dy="-.3"></svg:feoffset><svg:fegaussianblur stdDeviation=".3"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.658824 0 0 0 0 0.65098 0 0 0 0 0.678431 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_23266"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy="-.3"></svg:feoffset><svg:fegaussianblur stdDeviation=".3"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.529412 0 0 0 0 0.494118 0 0 0 0 0.615686 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect1_innerShadow_18_23266" result="effect2_innerShadow_18_23266"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="-.3" dy=".3"></svg:feoffset><svg:fegaussianblur stdDeviation=".3"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.913725 0 0 0 0 0.909804 0 0 0 0 0.92549 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="effect2_innerShadow_18_23266" result="effect3_innerShadow_18_23266"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiTriangularRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
