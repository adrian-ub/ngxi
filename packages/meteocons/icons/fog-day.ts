import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogDayIcon],svg[meteocons-fog-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsFogDay0" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsFogDay1" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsFogDay2"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsFogDay2)"><svg:use width="375" height="375" href="#meteoconsFogDay0" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:use width="258" height="66" href="#meteoconsFogDay1" transform="translate(127 339)"></svg:use>`,
})
export class MeteoconsFogDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
