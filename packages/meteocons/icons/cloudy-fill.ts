import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudyFillIcon],svg[meteocons-cloudy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsCloudyFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsCloudyFill1" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsCloudyFill0)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol></svg:defs><svg:use width="350" height="222" href="#meteoconsCloudyFill1" transform="translate(81 145)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use>`,
})
export class MeteoconsCloudyFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
