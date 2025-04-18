import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiStopSignIcon],svg[fluent-emoji-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g filter="url(#f2403id3)"><svg:path fill="url(#f2403id0)" d="M11.74 2h8.52c.99 0 1.93.39 2.63 1.09l6.02 6.02c.7.7 1.09 1.64 1.09 2.63v8.52c0 .99-.39 1.93-1.09 2.63l-6.02 6.02c-.7.7-1.64 1.09-2.63 1.09h-8.52c-.99 0-1.93-.39-2.63-1.09l-6.02-6.02c-.7-.7-1.09-1.64-1.09-2.63v-8.52c0-.99.39-1.93 1.09-2.63l6.02-6.02c.7-.7 1.64-1.09 2.63-1.09"></svg:path><svg:path fill="url(#f2403id1)" d="M11.74 2h8.52c.99 0 1.93.39 2.63 1.09l6.02 6.02c.7.7 1.09 1.64 1.09 2.63v8.52c0 .99-.39 1.93-1.09 2.63l-6.02 6.02c-.7.7-1.64 1.09-2.63 1.09h-8.52c-.99 0-1.93-.39-2.63-1.09l-6.02-6.02c-.7-.7-1.09-1.64-1.09-2.63v-8.52c0-.99.39-1.93 1.09-2.63l6.02-6.02c.7-.7 1.64-1.09 2.63-1.09"></svg:path></svg:g><svg:path fill="url(#f2403id2)" d="M12.57 4h6.86c.99 0 1.93.39 2.63 1.09l4.85 4.85c.7.7 1.09 1.64 1.09 2.63v6.86c0 .99-.39 1.93-1.09 2.63l-4.85 4.85c-.7.7-1.64 1.09-2.63 1.09h-6.86c-.99 0-1.93-.39-2.63-1.09l-4.85-4.85c-.7-.7-1.09-1.64-1.09-2.63v-6.86c0-.99.39-1.93 1.09-2.63l4.85-4.85c.7-.7 1.64-1.09 2.63-1.09"></svg:path><svg:defs><svg:lineargradient id="f2403id0" x1="27.86" x2="8.851" y1="6.975" y2="27.592" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FBF9FC"></svg:stop><svg:stop offset=".501" stop-color="#D5C9DD"></svg:stop><svg:stop offset="1" stop-color="#B9B3BC"></svg:stop></svg:lineargradient><svg:lineargradient id="f2403id1" x1="16" x2="16" y1="31.578" y2="27.653" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8C749B"></svg:stop><svg:stop offset="1" stop-color="#8C749B" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="f2403id2" x1="29.118" x2="3.998" y1="16" y2="16" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E53146"></svg:stop><svg:stop offset="1" stop-color="#CC307A"></svg:stop></svg:lineargradient><svg:filter id="f2403id3" width="28.75" height="28" x="2" y="2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></svg:feblend><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dx=".75"></svg:feoffset><svg:fegaussianblur stdDeviation=".75"></svg:fegaussianblur><svg:fecomposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></svg:fecomposite><svg:fecolormatrix values="0 0 0 0 0.52549 0 0 0 0 0.513726 0 0 0 0 0.537255 0 0 0 1 0"></svg:fecolormatrix><svg:feblend in2="shape" result="effect1_innerShadow_18_12046"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentEmojiStopSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
