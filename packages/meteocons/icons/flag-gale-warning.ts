import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsFlagGaleWarningIcon],svg[meteocons-flag-gale-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsFlagGaleWarning0" x1="90" x2="206" y1="155.6" y2="356.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsFlagGaleWarning0)" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M148 376V136"></svg:path><svg:g><svg:path fill="#ef4444" d="M191.4 137a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Zm0 110a6.4 6.4 0 0 0-7.3 6.4v82a6.4 6.4 0 0 0 7.3 6.4l167.1-40.4a6.4 6.4 0 0 0 5.5-6.3v-1.4a6.4 6.4 0 0 0-5.5-6.3Z"></svg:path><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1.1 1; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; -18 0; 0 0"></svg:animatetransform></svg:g>`,
})
export class MeteoconsFlagGaleWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
