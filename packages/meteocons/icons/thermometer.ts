import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerIcon],svg[meteocons-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometer0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#ef4444"></svg:circle><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometer1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometer2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometer0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometer1"></svg:use></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometer2" transform="translate(197 117)"></svg:use>`,
})
export class MeteoconsThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
