import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFogFillIcon],svg[meteocons-fog-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFogFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsFogFill1" x1="96" x2="168" y1="-2.4" y2="122.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsFogFill2" x2="168" y1="-50.4" y2="74.3" href="#meteoconsFogFill1"></svg:lineargradient><svg:symbol id="meteoconsFogFill3" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsFogFill0)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsFogFill4" viewBox="0 0 264 72"><svg:path fill="none" stroke="url(#meteoconsFogFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 60h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsFogFill2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 12h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="350" height="222" href="#meteoconsFogFill3" transform="translate(81 145)"></svg:use><svg:use width="264" height="72" href="#meteoconsFogFill4" transform="translate(124 402)"></svg:use>`,
})
export class MeteoconsFogFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
