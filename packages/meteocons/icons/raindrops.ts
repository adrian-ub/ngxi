import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropsIcon],svg[meteocons-raindrops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsRaindrops0"><svg:path fill="none" d="M302 137c-48.7 72-80 117-80 160.8s35.8 79.2 80 79.2v135H0V0h302Z"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .95; 1 1"></svg:animatetransform></svg:path></svg:clippath><svg:symbol id="meteoconsRaindrops1" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"></svg:path></svg:symbol></svg:defs><svg:use width="175" height="260.9" href="#meteoconsRaindrops1" transform="translate(214.5 123.62)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:use><svg:g clip-path="url(#meteoconsRaindrops0)"><svg:use width="175" height="260.9" href="#meteoconsRaindrops1" transform="translate(122.5 123.62)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 .9; 1 1; 1 .9"></svg:animatetransform></svg:use></svg:g>`,
})
export class MeteoconsRaindropsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
