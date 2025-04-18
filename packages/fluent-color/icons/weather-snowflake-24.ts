import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWeatherSnowflake24Icon],svg[fluent-color-weather-snowflake-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWeatherSnowflake240)" d="M12 2a1 1 0 0 1 1 1v2.551l1.707-1.706a1 1 0 1 1 1.414 1.414L13 8.379V11h2.62l3.121-3.12a1 1 0 1 1 1.414 1.413L18.45 11H21a1 1 0 1 1 0 2h-2.551l1.706 1.707a1 1 0 0 1-1.414 1.414L15.621 13H13v2.62l3.12 3.121a1 1 0 0 1-1.413 1.414L13 18.45V21a1 1 0 1 1-2 0v-2.551l-1.707 1.706a1 1 0 0 1-1.414-1.414L11 15.621V13H8.38l-3.121 3.12a1 1 0 0 1-1.414-1.413L5.55 13H3a1 1 0 1 1 0-2h2.551L3.845 9.293A1 1 0 1 1 5.259 7.88L8.379 11H11V8.38L7.88 5.259a1 1 0 0 1 1.413-1.414L11 5.55V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="url(#fluentColorWeatherSnowflake241)" d="M12 2a1 1 0 0 1 1 1v2.551l1.707-1.706a1 1 0 1 1 1.414 1.414L13 8.379V11h2.62l3.121-3.12a1 1 0 1 1 1.414 1.413L18.45 11H21a1 1 0 1 1 0 2h-2.551l1.706 1.707a1 1 0 0 1-1.414 1.414L15.621 13H13v2.62l3.12 3.121a1 1 0 0 1-1.413 1.414L13 18.45V21a1 1 0 1 1-2 0v-2.551l-1.707 1.706a1 1 0 0 1-1.414-1.414L11 15.621V13H8.38l-3.121 3.12a1 1 0 0 1-1.414-1.413L5.55 13H3a1 1 0 1 1 0-2h2.551L3.845 9.293A1 1 0 1 1 5.259 7.88L8.379 11H11V8.38L7.88 5.259a1 1 0 0 1 1.413-1.414L11 5.55V3a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorWeatherSnowflake240" x1="17" x2="7.625" y1="18.25" y2="3.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4894FE"></svg:stop><svg:stop offset=".495" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWeatherSnowflake241" x1="6.839" x2="22.114" y1="2.806" y2="22.683" gradientUnits="userSpaceOnUse"><svg:stop offset=".379" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWeatherSnowflake24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
