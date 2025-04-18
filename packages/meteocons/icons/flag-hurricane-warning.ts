import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagHurricaneWarningIcon],svg[meteocons-flag-hurricane-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagHurricaneWarning0" x1="116.5" x2="232.5" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:g><svg:path fill="none" stroke="url(#meteoconsFlagHurricaneWarning0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M174.5 376V136"></svg:path><svg:rect width="52.9" height="40" x="247.5" y="165" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:rect width="127" height="96" x="210.5" y="137" fill="#ef4444" rx="6.1"></svg:rect><svg:rect width="52.9" height="40" x="247.5" y="165" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:rect width="127" height="96" x="210.5" y="246" fill="#ef4444" rx="6.1"></svg:rect><svg:rect width="52.9" height="40" x="247.5" y="274" stroke="#ef4444" stroke-miterlimit="10" stroke-width="2" rx="6.1"></svg:rect><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagHurricaneWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
