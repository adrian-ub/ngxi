import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThunderstormsFillIcon],svg[meteocons-thunderstorms-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsThunderstormsFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsThunderstormsFill1" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f7b23b"></svg:stop><svg:stop offset=".5" stop-color="#f7b23b"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsThunderstormsFill2" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsThunderstormsFill0)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsThunderstormsFill3" viewBox="0 0 102.7 186.8"><svg:path fill="url(#meteoconsThunderstormsFill1)" stroke="#f6a823" stroke-miterlimit="10" stroke-width="4" d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z"><svg:animate id="meteoconsThunderstormsFill4" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="350" height="222" href="#meteoconsThunderstormsFill2" transform="translate(81 145)"></svg:use><svg:use width="102.7" height="186.7" href="#meteoconsThunderstormsFill3" transform="translate(205.23 291)"></svg:use>`,
})
export class MeteoconsThunderstormsFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
