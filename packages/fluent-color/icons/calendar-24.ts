import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCalendar24Icon],svg[fluent-color-calendar-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCalendar240)" d="M21 7.5v10.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.5l9-1z"></svg:path><svg:path fill="url(#fluentColorCalendar241)" d="M21 7.5v10.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.5l9-1z"></svg:path><svg:g filter="url(#fluentColorCalendar244)"><svg:path fill="url(#fluentColorCalendar242)" d="M7.25 15a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M12 15a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.75-4.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.75 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path></svg:g><svg:path fill="url(#fluentColorCalendar243)" d="M17.75 3A3.25 3.25 0 0 1 21 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorCalendar240" x1="15.25" x2="9.834" y1="22.781" y2="7.321" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar241" x1="13.929" x2="16.625" y1="12.432" y2="24.267" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCF8FF" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar242" x1="10.909" x2="13.059" y1="9.692" y2="23.697" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0078D4"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCalendar243" x1="3" x2="18.372" y1="3" y2="-1.963" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:filter id="fluentColorCalendar244" width="14.667" height="9.667" x="4.667" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><svg:feflood flood-opacity="0" result="BackgroundImageFix"></svg:feflood><svg:fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></svg:fecolormatrix><svg:feoffset dy=".667"></svg:feoffset><svg:fegaussianblur stdDeviation=".667"></svg:fegaussianblur><svg:fecolormatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"></svg:fecolormatrix><svg:feblend in2="BackgroundImageFix" result="effect1_dropShadow_378174_9792"></svg:feblend><svg:feblend in="SourceGraphic" in2="effect1_dropShadow_378174_9792" result="shape"></svg:feblend></svg:filter></svg:defs></svg:g>`,
})
export class FluentColorCalendar24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
