import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsNightFillIcon],svg[meteocons-thunderstorms-night-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThunderstormsNightFill0" viewBox="0 0 172 172"><svg:path fill="url(#meteoconsThunderstormsNightFill7)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M160.6 107.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 78 2A84.7 84.7 0 0 0 2 85.7A84.8 84.8 0 0 0 87.4 170a85.2 85.2 0 0 0 82.6-63.1a88 88 0 0 1-9.4.5Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 86 86; 9 86 86; -15 86 86"></svg:animatetransform></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightFill1" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsThunderstormsNightFill5)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsNightFill2" viewBox="0 0 351 246"><svg:use width="172" height="172" href="#meteoconsThunderstormsNightFill0"></svg:use><svg:use width="350" height="222" href="#meteoconsThunderstormsNightFill1" transform="translate(1 24)"></svg:use></svg:symbol><svg:symbol id="meteoconsThunderstormsNightFill3" viewBox="0 0 102.7 186.8"><svg:path fill="url(#meteoconsThunderstormsNightFill6)" stroke="#f6a823" stroke-miterlimit="10" stroke-width="4" d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z"><svg:animate id="meteoconsThunderstormsNightFill4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol><svg:lineargradient id="meteoconsThunderstormsNightFill5" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThunderstormsNightFill6" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f7b23b"></svg:stop><svg:stop offset=".5" stop-color="#f7b23b"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThunderstormsNightFill7" x1="34.7" x2="119.2" y1="18.6" y2="165" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:use width="351" height="246" href="#meteoconsThunderstormsNightFill2" transform="translate(80 121)"></svg:use><svg:use width="102.7" height="186.7" href="#meteoconsThunderstormsNightFill3" transform="translate(205.23 291)"></svg:use>`,
})
export class MeteoconsThunderstormsNightFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
