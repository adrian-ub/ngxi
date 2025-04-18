import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerRaindropFillIcon],svg[meteocons-thermometer-raindrop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerRaindropFill0" viewBox="0 0 164 245.6"><svg:path fill="url(#meteoconsThermometerRaindropFill4)" stroke="#2885c7" stroke-miterlimit="10" stroke-width="4" d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3S130.7 75.5 82 3.6Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindropFill1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindropFill2" viewBox="0 0 118 278"><svg:path fill="url(#meteoconsThermometerRaindropFill5)" stroke="url(#meteoconsThermometerRaindropFill6)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindropFill3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerRaindropFill1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerRaindropFill2"></svg:use></svg:symbol><svg:lineargradient id="meteoconsThermometerRaindropFill4" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3392d6"></svg:stop><svg:stop offset=".5" stop-color="#3392d6"></svg:stop><svg:stop offset="1" stop-color="#2477b2"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThermometerRaindropFill5" x1="-7.2" x2="116.4" y1="36.3" y2="250.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#515a69" stop-opacity=".1"></svg:stop><svg:stop offset=".5" stop-color="#6b7280" stop-opacity=".1"></svg:stop><svg:stop offset="1" stop-color="#384354" stop-opacity=".1"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThermometerRaindropFill6" x1="-8.7" x2="117.9" y1="33.7" y2="253" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsThermometerRaindropFill7"><svg:path fill="none" d="M334 392c-31 0-56-25.4-56-56.8a57 57 0 0 1 24-46.6V152.5a32.2 32.2 0 0 1 32-32.5H167.3v272Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerRaindropFill7)"><svg:use width="164" height="245.6" href="#meteoconsThermometerRaindropFill0" transform="translate(173.93 133.01)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerRaindropFill3" transform="translate(275 117)"></svg:use>`,
})
export class MeteoconsThermometerRaindropFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
