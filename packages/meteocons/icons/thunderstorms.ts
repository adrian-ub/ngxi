import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsIcon],svg[meteocons-thunderstorms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstorms0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstorms1" viewBox="0 0 96 176"><svg:path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><svg:animate id="meteoconsThunderstorms2" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsThunderstorms0" transform="translate(76.5 140.5)"></svg:use><svg:use width="96" height="176" href="#meteoconsThunderstorms1" transform="translate(208 293)"></svg:use>`,
})
export class MeteoconsThunderstormsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
