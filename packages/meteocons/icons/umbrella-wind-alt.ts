import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaWindAltIcon],svg[meteocons-umbrella-wind-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsUmbrellaWindAlt0" viewBox="0 0 138 96"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="58" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M105.2 10.8A15.6 15.6 0 1 1 116.4 37H6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1274"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="43" stroke-linecap="round" stroke-miterlimit="10" stroke-width="12" d="M60.7 85.2A15.6 15.6 0 1 0 71.9 59H6.6"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 857"></svg:animate></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M220 360a24 24 0 1 1-34-34l1.8-1.8L305 207"></svg:path><svg:g transform="rotate(45 256 256)"><svg:g fill="#ef4444"><svg:path d="m215.8 114l-7.9 3.8a71.1 71.1 0 0 1-58.5.5l-12.8-5.7c.1 51.8 51.6 94.1 115.8 96c-9-9.6-41.6-47.3-36.6-94.5Z"></svg:path><svg:path d="M221.8 114c-4.9 44.5 26.4 81.2 35 90.2c8.4-9 39.7-45.9 34.8-90.2l-4 2a70.8 70.8 0 0 1-61.9 0Z"></svg:path><svg:path d="M363.9 118.4a71.2 71.2 0 0 1-58.5-.5l-7.8-3.8c4.9 47.2-27.6 85-36.7 94.4c64.4-1.9 115.7-44.1 115.8-96Z"></svg:path></svg:g><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g><svg:use width="138" height="96" href="#meteoconsUmbrellaWindAlt0" transform="translate(62.5 201)"></svg:use>`,
})
export class MeteoconsUmbrellaWindAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
