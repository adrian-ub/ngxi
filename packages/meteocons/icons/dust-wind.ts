import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsDustWindIcon],svg[meteocons-dust-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsDustWind0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g opacity="0"><svg:circle cx="96" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="222" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="172" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind1" additive="sum" attributeName="transform" begin="1s; x1.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind2" attributeName="opacity" begin="1s; y1.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:g opacity="0"><svg:circle cx="180" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="306" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="256" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind3" additive="sum" attributeName="transform" begin=".5s; x2.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind4" attributeName="opacity" begin=".5s; y2.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:g opacity="0"><svg:circle cx="264" cy="196" r="12" fill="#fde68a"></svg:circle><svg:circle cx="390" cy="256" r="12" fill="#fde68a"></svg:circle><svg:circle cx="340" cy="316" r="12" fill="#fde68a"></svg:circle><svg:animatetransform id="meteoconsDustWind5" additive="sum" attributeName="transform" begin="0s; x3.end+1.17s" dur=".83s" type="translate" values="-24 0; 24 0"></svg:animatetransform><svg:animate id="meteoconsDustWind6" attributeName="opacity" begin="0s; y3.end+1.17s" dur=".83s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:g><svg:use width="342" height="234" href="#meteoconsDustWind0" transform="translate(86 139)"></svg:use>`,
})
export class MeteoconsDustWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
