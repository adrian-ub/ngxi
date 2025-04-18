import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMistFillIcon],svg[meteocons-mist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMistFill0" x1="220" x2="292" y1="137.7" y2="262.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsMistFill1" y1="193.7" y2="318.4" href="#meteoconsMistFill0"></svg:lineargradient><svg:lineargradient id="meteoconsMistFill2" y1="249.7" y2="374.4" href="#meteoconsMistFill0"></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsMistFill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M136 200h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsMistFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M136 256h240"><svg:animatetransform additive="sum" attributeName="transform" begin="-1.5s" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsMistFill2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M136 312h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="48 0; -48 0; 48 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsMistFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
