import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCalendar32Icon],svg[fluent-color-calendar-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCalendar320)" d="M29 24.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V10l13-1l13 1z"></svg:path><svg:path fill="url(#fluentColorCalendar321)" d="M29 24.5a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5V10l13-1l13 1z"></svg:path><svg:g filter="url(#fluentColorCalendar324)"><svg:path fill="url(#fluentColorCalendar322)" d="M10.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5-6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g><svg:path fill="url(#fluentColorCalendar323)" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V10H3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorCalendar320" x1="20.694" x2="13.492" y1="31.456" y2="9.925" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar321" x1="18.786" x2="22.353" y1="17.182" y2="33.578" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar322" x1="14.727" x2="17.137" y1="14.077" y2="30.097" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar323" x1="3" x2="25.069" y1="3" y2="-4.352" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:filter id="fluentColorCalendar324" width="16.667" height="10.667" x="7.667" y="14.333" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy=".667"></svg:feoffset><svg:fegaussianblur stdDeviation=".667"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"></svg:fecolormatrix><svg:feblend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9802"></svg:feblend><svg:feblend in="SourceGraphic" in2="effect1_dropShadow_378174_9802" result="shape"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentColorCalendar32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
