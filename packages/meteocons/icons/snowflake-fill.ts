import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSnowflakeFillIcon],svg[meteocons-snowflake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsSnowflakeFill0" x1="192" x2="320" y1="145.2" y2="366.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#meteoconsSnowflakeFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m372 295.2l-34.3-19.7a83.8 83.8 0 0 0 0-39l34.3-19.7a24 24 0 1 0-24-41.6L313.7 195a81.4 81.4 0 0 0-33.7-19.4V136a24 24 0 0 0-48 0v39.6a84 84 0 0 0-33.7 19.4L164 175.2a24 24 0 1 0-24 41.6l34.3 19.7a83.8 83.8 0 0 0 0 39L140 295.1a24 24 0 1 0 24 41.6l34.3-19.8a80.6 80.6 0 0 0 33.7 19.4V376a24 24 0 0 0 48 0v-39.7a84 84 0 0 0 33.7-19.3l34.3 19.8a24 24 0 1 0 24-41.6Zm-134-8a36 36 0 1 1 49.2-13.2a36 36 0 0 1-49.2 13.2Z"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; .9 .9; 1 1; .9 .9; 1 1"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="0 0; 25.75 25.75; 0 0; 25.75 25.75; 0 0"></svg:animatetransform><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"></svg:animatetransform></svg:path>`,
})
export class MeteoconsSnowflakeFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
