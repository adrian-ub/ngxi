import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerRaindropIcon],svg[meteocons-thermometer-raindrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerRaindrop0" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop1" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop2" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerRaindrop3" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerRaindrop1" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerRaindrop2"></svg:use></svg:symbol><svg:clippath id="meteoconsThermometerRaindrop4"><svg:path fill="none" d="M334 392c-31 0-56-25.4-56-56.8a57 57 0 0 1 24-46.6V152.5a32.2 32.2 0 0 1 32-32.5H167.3v272Zm4-192h28m-28-32h28m-28 64h28"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#meteoconsThermometerRaindrop4)"><svg:use width="175" height="260.9" href="#meteoconsThermometerRaindrop0" transform="translate(168.43 123.18)"></svg:use></svg:g><svg:use width="118" height="278" href="#meteoconsThermometerRaindrop3" transform="translate(275 117)"></svg:use>`,
})
export class MeteoconsThermometerRaindropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
