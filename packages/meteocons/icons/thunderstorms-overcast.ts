import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsOvercastIcon],svg[meteocons-thunderstorms-overcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsOvercast0" viewBox="0 0 214.3 140.1"><svg:path fill="none" stroke="#94a3b8" stroke-linejoin="round" stroke-width="15" d="M7.5 100.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5a32.4 32.4 0 0 0-32.4 32.4Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast1" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast2" viewBox="0 0 447.7 371.5"><svg:g clip-path="url(#meteoconsThunderstormsOvercast5)"><svg:use width="214.3" height="140.1" href="#meteoconsThunderstormsOvercast0" transform="translate(195.51 165.01)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use></svg:g><svg:use width="359" height="231" href="#meteoconsThunderstormsOvercast1" transform="translate(0 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsOvercast3" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstormsOvercast4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:clippath id="meteoconsThunderstormsOvercast5"><svg:path fill="none" d="M351.5 308a56 56 0 0 0-56-56l-2.5.1A83.7 83.7 0 0 0 211.5 148V0h236.2v308Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:path></svg:clippath></svg:defs><svg:use width="447.7" height="371.5" href="#meteoconsThunderstormsOvercast2" transform="translate(64.34)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstormsOvercast3" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsOvercastIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
