import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightIcon],svg[meteocons-thunderstorms-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNight0" viewBox="0 0 178 178"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M163.6 110.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 81 5A84.7 84.7 0 0 0 5 88.7A84.8 84.8 0 0 0 90.4 173a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNight1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNight2" viewBox="0 0 435.5 371.5"><svg:g clip-path="url(#meteoconsThunderstormsNight5)"><svg:use width="178" height="178" href="#meteoconsThunderstormsNight0" transform="translate(77 118)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsNight1" transform="translate(76.5 140.5)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNight3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsNight4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsNight5"><svg:path fill="none" d="M288 148a83.8 83.8 0 0 0-71.4 40a56 56 0 0 0-84.6 48a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 84 304H0V0h288Z"></svg:path></svg:clippath></svg:defs><svg:use width="435.5" height="371.5" href="#meteoconsThunderstormsNight2"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsNight3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsNightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
