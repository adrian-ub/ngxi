import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWeatherSnowflake20Icon],svg[fluent-color-weather-snowflake-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWeatherSnowflake200)" d="M10 2.25a.75.75 0 0 1 .75.75v2.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v1.44h1.44l2.78-2.78a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17a.75.75 0 0 1 0 1.5h-2.69l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.78-2.78h-1.44v1.44l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V17a.75.75 0 0 1-1.5 0v-2.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-1.44H7.81l-2.78 2.78a.75.75 0 0 1-1.06-1.06l1.72-1.72H3a.75.75 0 0 1 0-1.5h2.69L3.97 7.53a.75.75 0 0 1 1.06-1.06l2.78 2.78h1.44V7.81L6.47 5.03a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="url(#fluentColorWeatherSnowflake201)" d="M10 2.25a.75.75 0 0 1 .75.75v2.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v1.44h1.44l2.78-2.78a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17a.75.75 0 0 1 0 1.5h-2.69l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.78-2.78h-1.44v1.44l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V17a.75.75 0 0 1-1.5 0v-2.69l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-1.44H7.81l-2.78 2.78a.75.75 0 0 1-1.06-1.06l1.72-1.72H3a.75.75 0 0 1 0-1.5h2.69L3.97 7.53a.75.75 0 0 1 1.06-1.06l2.78 2.78h1.44V7.81L6.47 5.03a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75"></svg:path><svg:defs><svg:lineargradient id="fluentColorWeatherSnowflake200" x1="13.875" x2="6.609" y1="14.844" y2="3.703" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4894FE"></svg:stop><svg:stop offset=".495" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWeatherSnowflake201" x1="6" x2="17.839" y1="2.875" y2="18.279" gradientUnits="userSpaceOnUse"><svg:stop offset=".379" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWeatherSnowflake20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
