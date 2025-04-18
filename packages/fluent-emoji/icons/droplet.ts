import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiDropletIcon],svg[fluent-emoji-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f418id3)"><svg:path fill="url(#f418id0)" d="M18.247 3.37c-.99-1.85-3.662-1.85-4.642 0l-6.273 11.8c-3.842 6.58.95 14.81 8.614 14.81h.21c7.554 0 12.266-8.1 8.494-14.58z"></svg:path></svg:g><svg:path fill="url(#f418id1)" d="M18.247 3.37c-.99-1.85-3.662-1.85-4.642 0l-6.273 11.8c-3.842 6.58.95 14.81 8.614 14.81h.21c7.554 0 12.266-8.1 8.494-14.58z"></svg:path><svg:path fill="url(#f418id2)" d="M18.247 3.37c-.99-1.85-3.662-1.85-4.642 0l-6.273 11.8c-3.842 6.58.95 14.81 8.614 14.81h.21c7.554 0 12.266-8.1 8.494-14.58z"></svg:path><svg:g filter="url(#f418id4)"><svg:path fill="url(#f418id5)" d="m23.46 14.917l-6.6-11.923v21.054l5.45-3.956a4 4 0 0 0 1.15-5.175"></svg:path></svg:g><svg:defs><svg:radialgradient id="f418id0" cx="0" cy="0" r="1" gradientTransform="rotate(112.428 9.057 10.168)scale(28.8219 18.0824)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7ADEFF"></svg:stop><svg:stop offset=".479" stop-color="#6CCEFF"></svg:stop><svg:stop offset="1" stop-color="#6E99FF"></svg:stop></svg:radialgradient><svg:radialgradient id="f418id1" cx="0" cy="0" r="1" gradientTransform="rotate(109.959 6.895 11.149)scale(23.8856 18.213)" gradientUnits="userSpaceOnUse"><svg:stop offset=".572" stop-color="#7778FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#7778FF"></svg:stop></svg:radialgradient><svg:radialgradient id="f418id2" cx="0" cy="0" r="1" gradientTransform="rotate(137.203 8.163 14.052)scale(9.86906 11.8742)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84C8FF"></svg:stop><svg:stop offset="1" stop-color="#84C8FF" stop-opacity="0"></svg:stop></svg:radialgradient><svg:filter id="f418id3" width="22" height="28.998" x="5.978" y=".983" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx="2" dy="-1"></svg:feoffset><svg:fegaussianblur stdDeviation="1.5"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.423529 0 0 0 0 0.572549 0 0 0 0 0.729412 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_15832"></svg:feblend></svg:filter><svg:filter id="f418id4" width="11.601" height="25.554" x="14.61" y=".744" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fegaussianblur result="effect1_foregroundBlur_18_15832" stdDeviation="1.125"></svg:fegaussianblur></svg:filter><svg:lineargradient id="f418id5" x1="21.732" x2="12.569" y1="9.341" y2="13.945" gradientUnits="userSpaceOnUse"><svg:stop offset=".21" stop-color="#8BEFFF"></svg:stop><svg:stop offset="1" stop-color="#8BEFFF" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiDropletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
