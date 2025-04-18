import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCalendar16Icon],svg[fluent-color-calendar-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCalendar160)" d="M14 11.5v-6l-6-1l-6 1v6A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5"></svg:path><svg:path fill="url(#fluentColorCalendar161)" d="M14 11.5v-6l-6-1l-6 1v6A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5"></svg:path><svg:g filter="url(#fluentColorCalendar164)"><svg:path fill="url(#fluentColorCalendar162)" d="M5.248 8.997a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497m.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0M8 8.997A.748.748 0 1 0 8 7.5a.748.748 0 0 0 0 1.497m.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0m2-1.752a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497"></svg:path></svg:g><svg:path fill="url(#fluentColorCalendar163)" d="M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V6h12z"></svg:path><svg:defs><svg:lineargradient id="fluentColorCalendar160" x1="10.167" x2="6.667" y1="15.167" y2="5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar161" x1="9.286" x2="11.025" y1="8.386" y2="16.154" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar162" x1="7.362" x2="8.566" y1="7.039" y2="15.043" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar163" x1="2" x2="12.552" y1="2" y2="-.839" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:filter id="fluentColorCalendar164" width="9.664" height="6.664" x="3.167" y="6.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy=".667"></svg:feoffset><svg:fegaussianblur stdDeviation=".667"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"></svg:fecolormatrix><svg:feblend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9782"></svg:feblend><svg:feblend in="SourceGraphic" in2="effect1_dropShadow_378174_9782" result="shape"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentColorCalendar16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
