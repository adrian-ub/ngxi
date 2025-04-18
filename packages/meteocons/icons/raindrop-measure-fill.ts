import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropMeasureFillIcon],svg[meteocons-raindrop-measure-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsRaindropMeasureFill0" x1="14.8" x2="124.2" y1="42.3" y2="231.7" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3392d6"></svg:stop><svg:stop offset=".5" stop-color="#3392d6"></svg:stop><svg:stop offset="1" stop-color="#2477b2"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsRaindropMeasureFill1" x1="188.8" x2="298.2" y1="170.8" y2="360.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsRaindropMeasureFill2" x1="310.5" x2="425.5" y1="152.5" y2="351.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsRaindropMeasureFill3"><svg:path fill="none"><svg:animate attributeName="meteoconsRaindropMeasureFill3" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M168,252H344V380H168Z; M168,220H376V380H168Z; M168,252H344V380H168Z"></svg:animate></svg:path></svg:clippath><svg:symbol id="meteoconsRaindropMeasureFill4" viewBox="0 0 164 245.6"><svg:path fill="url(#meteoconsRaindropMeasureFill0)" stroke="#2885c7" stroke-miterlimit="10" stroke-width="4" d="M82 3.6c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3S130.7 75.5 82 3.6Z"></svg:path></svg:symbol></svg:defs><svg:path fill="url(#meteoconsRaindropMeasureFill1)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="4" d="M256 132c-48.7 72-80 117-80 160.8s35.8 79.2 80 79.2s80-35.5 80-79.3S304.7 204 256 132Z"></svg:path><svg:path fill="none" stroke="url(#meteoconsRaindropMeasureFill2)" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M352 132h32v240h-32m8-120h24m-16 56h16m-16-120h16"></svg:path><svg:g clip-path="url(#meteoconsRaindropMeasureFill3)"><svg:use width="164" height="245.6" href="#meteoconsRaindropMeasureFill4" transform="translate(174.11 128.99)"></svg:use></svg:g>`,
})
export class MeteoconsRaindropMeasureFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
