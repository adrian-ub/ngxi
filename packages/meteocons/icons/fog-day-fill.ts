import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogDayFillIcon],svg[meteocons-fog-day-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFogDayFill0" x1="96" x2="168" y1="-2.4" y2="122.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsFogDayFill1" x2="168" y1="-50.4" y2="74.3" href="#meteoconsFogDayFill0"></svg:lineargradient><svg:lineargradient id="meteoconsFogDayFill2" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fbbf24"></svg:stop><svg:stop offset=".5" stop-color="#fbbf24"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsFogDayFill3" viewBox="0 0 384 384"><svg:circle cx="192" cy="192" r="84" fill="url(#meteoconsFogDayFill2)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsFogDayFill4" viewBox="0 0 264 72"><svg:path fill="none" stroke="url(#meteoconsFogDayFill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 60h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsFogDayFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 12h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsFogDayFill5"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsFogDayFill5)"><svg:use width="384" height="384" href="#meteoconsFogDayFill3" transform="translate(64 100)"></svg:use></svg:g><svg:use width="264" height="72" href="#meteoconsFogDayFill4" transform="translate(124 336)"></svg:use>`,
})
export class MeteoconsFogDayFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
