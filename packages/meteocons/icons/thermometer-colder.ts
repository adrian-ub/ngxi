import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerColderIcon],svg[meteocons-thermometer-colder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerColder0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#2885c7"></svg:circle><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"><svg:animatetransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 18; 0 0"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerColder1" viewBox="0 0 118 278"><svg:path fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M115 218.2c0 31.4-25 56.8-56 56.8S3 249.6 3 218.2a57 57 0 0 1 24-46.6V35.5a32 32 0 1 1 64 0v136a57 57 0 0 1 24 46.7ZM63 83h28M63 51h28m-28 64h28"></svg:path></svg:symbol><svg:symbol id="meteoconsThermometerColder2" viewBox="0 0 118 278"><svg:use width="72" height="168" href="#meteoconsThermometerColder0" transform="translate(23 87)"></svg:use><svg:use width="118" height="278" href="#meteoconsThermometerColder1"></svg:use></svg:symbol></svg:defs><svg:use width="118" height="278" href="#meteoconsThermometerColder2" transform="translate(197 117)"></svg:use><svg:path fill="#2a81bf" d="M372.5 271a4.6 4.6 0 0 0-3.2 1.3L350 290.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.2s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M372.5 244a4.6 4.6 0 0 0-3.2 1.3L350 263.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1.1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#2a81bf" d="M372.5 217a4.6 4.6 0 0 0-3.2 1.3L350 236.7l-19.3-18.4a4.6 4.6 0 0 0-6.4 0a4.1 4.1 0 0 0 0 6l22.5 21.4a4.6 4.6 0 0 0 6.4 0l22.5-21.4a4.1 4.1 0 0 0 0-6a4.6 4.6 0 0 0-3.2-1.3Z" opacity="0"><svg:animatetransform attributeName="transform" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" type="translate" values="0 -30; 0 0; 0 30"></svg:animatetransform><svg:animate attributeName="opacity" begin="-1s" calcMode="spline" dur="3s" keySplines=".55, 0, .1, 1; .55, 0, .1, 1" repeatCount="indefinite" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsThermometerColderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
