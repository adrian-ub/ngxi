import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUmbrellaFillIcon],svg[meteocons-umbrella-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsUmbrellaFill0" x1="203.5" x2="323.7" y1="156.4" y2="364.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsUmbrellaFill1" x1="209.3" x2="290.6" y1="145.6" y2="286.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f87171"></svg:stop><svg:stop offset=".5" stop-color="#f87171"></svg:stop><svg:stop offset="1" stop-color="#dc2626"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsUmbrellaFill0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M304 355a24 24 0 0 1-48 0V133"></svg:path><svg:g><svg:path fill="url(#meteoconsUmbrellaFill1)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="4" d="M376 237c0-53-53.7-96-120-96s-120 43-120 96l12.7-5.8c18-8.3 41-8 58.5.5l11 5.3l6.8-3.5a70.8 70.8 0 0 1 62 0l6.8 3.5l11-5.3a71.1 71.1 0 0 1 58.5-.5Z"></svg:path><svg:path fill="none" stroke="#ef4444" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M293.8 237c6.6-53.6-37.8-96-37.8-96s-44.4 42.4-37.8 96"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 1.1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 29 -14; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsUmbrellaFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
