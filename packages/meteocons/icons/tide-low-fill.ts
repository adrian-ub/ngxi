import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsTideLowFillIcon],svg[meteocons-tide-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsTideLowFill0" x1="79.5" x2="165.8" y1="-22.3" y2="127.2" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3392d6"></svg:stop><svg:stop offset=".5" stop-color="#3392d6"></svg:stop><svg:stop offset="1" stop-color="#2477b2"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsTideLowFill1" viewBox="0 0 244 92"><svg:path fill="url(#meteoconsTideLowFill0)" stroke="#2885c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:animate attributeName="d" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" values="M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 59 A 16.14 16.14 0 0 0 18 75 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z; M 242 24.63 h -8 c -10.92 0 -20.85 -11.66 -26 -21.39 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 157.15 13 152 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15.05 21.39 -26 21.39 S 101.15 13 96 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 S 45.15 13 40 3.24 a 2.28 2.28 0 0 0 -4.06 0 c -5.12 9.73 -15 21.39 -26 21.39 H 2 V 74 A 16.14 16.14 0 0 0 18 90 H 226 a 16.14 16.14 0 0 0 16 -16.3 Z"></svg:animate><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 15; 0 0"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="244" height="92" href="#meteoconsTideLowFill1" transform="translate(134 242)"></svg:use><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M256 146v72l-24-27.6l24 27.6l24-27.6"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 0 33; 0 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsTideLowFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
