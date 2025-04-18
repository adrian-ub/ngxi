import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaWindIcon],svg[meteocons-umbrella-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsUmbrellaWind0" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M220 360a24 24 0 1 1-34-34l1.8-1.8L326 186"></svg:path><svg:g transform="rotate(45 256 256)"><svg:g fill="#ef4444"><svg:path d="M251.7 141.1c-64.3 1.8-115.8 44-115.7 95.9l12.7-5.8a71.2 71.2 0 0 1 58.5.5l7.9 3.7c-5-47.1 27.6-84.9 36.6-94.3Zm8.6 0c9 9.4 41.5 47.2 36.6 94.3l7.9-3.7a71.1 71.1 0 0 1 58.5-.5L376 237c0-52-51.4-94.1-115.7-95.9Z"></svg:path><svg:path d="M291 235.5c4.8-44.3-26.4-81.1-35-90.2c-8.5 9-39.8 45.9-35 90.2l4-2a70.9 70.9 0 0 1 62 0Z"></svg:path></svg:g><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g><svg:use width="138" height="96" href="#meteoconsUmbrellaWind0" transform="translate(62.5 201)"></svg:use>`,
})
export class MeteoconsUmbrellaWindIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
