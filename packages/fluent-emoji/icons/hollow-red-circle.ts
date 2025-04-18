import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHollowRedCircleIcon],svg[fluent-emoji-hollow-red-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f704id3)"><svg:circle cx="15.969" cy="15.75" r="12.438" stroke="url(#f704id0)" stroke-width="3"></svg:circle></svg:g><svg:g filter="url(#f704id4)"><svg:circle cx="16.305" cy="15.414" r="12.438" stroke="url(#f704id1)"></svg:circle><svg:circle cx="16.305" cy="15.414" r="12.438" stroke="url(#f704id2)"></svg:circle></svg:g><svg:defs><svg:lineargradient id="f704id0" x1="23.438" x2="6.688" y1="3.875" y2="22.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF5C96"></svg:stop><svg:stop offset=".486" stop-color="#DB3051"></svg:stop><svg:stop offset="1" stop-color="#EF3741"></svg:stop></svg:lineargradient><svg:lineargradient id="f704id1" x1="26.598" x2="16.305" y1="5.422" y2="19.179" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF75A8"></svg:stop><svg:stop offset="1" stop-color="#FF75A8" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f704id2" x1="7.388" x2="12.589" y1="23.29" y2="17.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF6D6F"></svg:stop><svg:stop offset="1" stop-color="#FF6D6F" stop-opacity="0"></svg:stop></svg:lineargradient><svg:filter id="f704id3" width="28.375" height="28.375" x="2.032" y="1.313" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".5" dy="-.5"></svg:feoffset><svg:fegaussianblur stdDeviation=".5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.921569 0 0 0 0 0.164706 0 0 0 0 0.309804 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18590_1981"></svg:feblend></svg:filter><svg:filter id="f704id4" width="27.375" height="27.375" x="2.617" y="1.727" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fegaussianblur result="effect1_foregroundBlur_18590_1981" stdDeviation=".375"></svg:fegaussianblur></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiHollowRedCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
