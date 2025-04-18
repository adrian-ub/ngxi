import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPartlyCloudyDayFogIcon],svg[meteocons-partly-cloudy-day-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsPartlyCloudyDayFog0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsPartlyCloudyDayFog4)"><svg:use width="193" height="193" href="#meteoconsPartlyCloudyDayFog0" transform="translate(69.5 110.5)"></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsPartlyCloudyDayFog1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsPartlyCloudyDayFog3" viewBox="0 0 258 66"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol><svg:clippath id="meteoconsPartlyCloudyDayFog4"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsPartlyCloudyDayFog2"></svg:use><svg:use width="258" height="66" href="#meteoconsPartlyCloudyDayFog3" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsPartlyCloudyDayFogIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
