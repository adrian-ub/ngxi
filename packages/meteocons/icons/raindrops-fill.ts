import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropsFillIcon],svg[meteocons-raindrops-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsRaindropsFill0" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3392d6"></svg:stop><svg:stop offset=".5" stop-color="#3392d6"></svg:stop><svg:stop offset="1" stop-color="#2477b2"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsRaindropsFill1" viewBox="0 0 164 245.6"><svg:path fill="url(#meteoconsRaindropsFill0)" stroke="#2885c7" stroke-miterlimit="10" stroke-width="4" d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3S130.7 75.5 82 3.6Z"></svg:path></svg:symbol></svg:defs><svg:use width="164" height="245.6" href="#meteoconsRaindropsFill1" transform="translate(128 133.43)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:use><svg:use width="164" height="245.6" href="#meteoconsRaindropsFill1" transform="translate(220 133.43)"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 .9; 1 1; 1 .9"></svg:animatetransform></svg:use>`,
})
export class MeteoconsRaindropsFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
