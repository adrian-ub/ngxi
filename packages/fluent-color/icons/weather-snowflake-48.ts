import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWeatherSnowflake48Icon],svg[fluent-color-weather-snowflake-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWeatherSnowflake480)" d="M24.5 4A1.5 1.5 0 0 1 26 5.5v7.827l4.503-4.503a1.5 1.5 0 0 1 2.122 2.121L26 17.57V23h5.43l6.625-6.625a1.5 1.5 0 0 1 2.121 2.122L35.673 23H43.5a1.5 1.5 0 0 1 0 3h-7.827l4.26 4.26a1.5 1.5 0 0 1-2.122 2.121L31.43 26H26v5.43l6.381 6.381a1.5 1.5 0 0 1-2.121 2.121L26 35.673V43.5a1.5 1.5 0 0 1-3 0v-7.827l-4.503 4.503a1.5 1.5 0 0 1-2.122-2.121L23 31.43V26h-5.43l-6.625 6.625a1.5 1.5 0 0 1-2.121-2.122L13.327 26H5.5a1.5 1.5 0 0 1 0-3h7.827L8.58 18.253a1.5 1.5 0 0 1 2.122-2.121L17.57 23H23v-5.43l-6.868-6.868a1.5 1.5 0 0 1 2.121-2.122L23 13.327V5.5A1.5 1.5 0 0 1 24.5 4"></svg:path><svg:path fill="url(#fluentColorWeatherSnowflake481)" d="M24.5 4A1.5 1.5 0 0 1 26 5.5v7.827l4.503-4.503a1.5 1.5 0 0 1 2.122 2.121L26 17.57V23h5.43l6.625-6.625a1.5 1.5 0 0 1 2.121 2.122L35.673 23H43.5a1.5 1.5 0 0 1 0 3h-7.827l4.26 4.26a1.5 1.5 0 0 1-2.122 2.121L31.43 26H26v5.43l6.381 6.381a1.5 1.5 0 0 1-2.121 2.121L26 35.673V43.5a1.5 1.5 0 0 1-3 0v-7.827l-4.503 4.503a1.5 1.5 0 0 1-2.122-2.121L23 31.43V26h-5.43l-6.625 6.625a1.5 1.5 0 0 1-2.121-2.122L13.327 26H5.5a1.5 1.5 0 0 1 0-3h7.827L8.58 18.253a1.5 1.5 0 0 1 2.122-2.121L17.57 23H23v-5.43l-6.868-6.868a1.5 1.5 0 0 1 2.121-2.122L23 13.327V5.5A1.5 1.5 0 0 1 24.5 4"></svg:path><svg:defs><svg:lineargradient id="fluentColorWeatherSnowflake480" x1="34.75" x2="15.531" y1="37.313" y2="7.844" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4894FE"></svg:stop><svg:stop offset=".495" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWeatherSnowflake481" x1="13.919" x2="45.234" y1="5.653" y2="46.399" gradientUnits="userSpaceOnUse"><svg:stop offset=".379" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWeatherSnowflake48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
