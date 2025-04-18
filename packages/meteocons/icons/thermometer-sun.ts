import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerSunIcon],svg[meteocons-thermometer-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerSun0" viewBox="0 0 193 193"><svg:circle cx="96.5" cy="96.5" r="40" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="9"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="9" d="M96.5 29.9V4.5m0 184v-25.4m47.1-113.7l18-18M31.4 161.6l18-18m0-94.2l-18-18m130.2 130.2l-18-18M4.5 96.5h25.4m158.6 0h-25.4"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 96.5 96.5; 45 96.5 96.5"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerSun3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerSun1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerSun2"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerSun4"><svg:path fill="none" d="M256 392c31 0 56-25.4 56-56.8a57 57 0 0 0-24-46.6V152.5a32.2 32.2 0 0 0-32-32.5V79.7h167.2V392Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerSun4)"><svg:use width="193" height="193" href="#meteoconsThermometerSun0" transform="translate(217.5 109.5)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerSun3" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerSunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
