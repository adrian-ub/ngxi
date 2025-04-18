import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSmokeFillIcon],svg[meteocons-smoke-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsSmokeFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsSmokeFill1" x1="74" x2="98" y1="165.2" y2="206.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#b8bdc6"></svg:stop><svg:stop offset=".5" stop-color="#b8bdc6"></svg:stop><svg:stop offset="1" stop-color="#a5aab2"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsSmokeFill2" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsSmokeFill0)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsSmokeFill3" viewBox="0 0 168 212"><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeFill1)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeFill4" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeFill5" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeFill6" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeFill1)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeFill7" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeFill8" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeFill9" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeFill1)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeFilla" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeFillb" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeFillc" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol></svg:defs><svg:use width="350" height="222" href="#meteoconsSmokeFill2" transform="translate(81 145)"></svg:use><svg:use width="168" height="212" href="#meteoconsSmokeFill3" transform="translate(172 232)"></svg:use>`,
})
export class MeteoconsSmokeFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
