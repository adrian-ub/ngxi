import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMistIcon],svg[meteocons-mist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 200h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 256h240"><svg:animatetransform additive="sum" attributeName="transform" begin="-1.5s" dur="6s" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M136 312h240"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="48 0; -48 0; 48 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsMistIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
