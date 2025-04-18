import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerCelsiusFillIcon],svg[meteocons-thermometer-celsius-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerCelsiusFill0" viewBox="0 0 109.1 73.2"><svg:path fill="#374151" d="M19.4 0A18.7 18.7 0 0 0 0 19.3a18.9 18.9 0 0 0 19.4 19.5a18.7 18.7 0 0 0 14-5.6a18.8 18.8 0 0 0 5.4-14A18.7 18.7 0 0 0 19.4 0Zm6.3 25.7a8.6 8.6 0 0 1-6.3 2.5a8.5 8.5 0 0 1-6.2-2.5a8.7 8.7 0 0 1-2.4-6.4A8.6 8.6 0 0 1 13 13a8.4 8.4 0 0 1 6.3-2.5a8.4 8.4 0 0 1 8.7 8.8a8.7 8.7 0 0 1-2.4 6.4Zm53.1 32.8a13.4 13.4 0 0 1-11.5-5.6q-4-5.7-4-16q0-10 4-15.6a13.4 13.4 0 0 1 11.5-5.6a12.6 12.6 0 0 1 8.6 3a13.3 13.3 0 0 1 4.2 8.2H109q-1.4-12-9.5-19T78.3 1q-14.5 0-23.7 9.8T45.3 37q0 16.4 9.2 26.3t23.7 9.9q13.2 0 21.6-7.1q8.3-7 9.3-19.6H91.6q-1.6 12-12.8 12Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsiusFill1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsiusFill2" viewBox="0 0 118 278"><svg:path fill="url(#meteoconsThermometerCelsiusFill4)" stroke="url(#meteoconsThermometerCelsiusFill5)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerCelsiusFill3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerCelsiusFill1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerCelsiusFill2"></svg:use></svg:symbol><svg:lineargradient id="meteoconsThermometerCelsiusFill4" x1="-7.2" x2="116.4" y1="36.3" y2="250.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#515a69" stop-opacity=".1"></svg:stop><svg:stop offset=".5" stop-color="#6b7280" stop-opacity=".1"></svg:stop><svg:stop offset="1" stop-color="#384354" stop-opacity=".1"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThermometerCelsiusFill5" x1="-8.7" x2="117.9" y1="33.7" y2="253" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:use width="109.1" height="73.2" href="#meteoconsThermometerCelsiusFill0" transform="translate(314 250)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerCelsiusFill3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerCelsiusFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
