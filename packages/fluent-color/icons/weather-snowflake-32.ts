import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWeatherSnowflake32Icon],svg[fluent-color-weather-snowflake-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWeatherSnowflake320)" d="M16.25 2.5c.69 0 1.25.56 1.25 1.25v4.194l2.674-2.674a1.25 1.25 0 0 1 1.768 1.768L17.5 11.479V15h3.52l4.442-4.442a1.25 1.25 0 0 1 1.768 1.768L24.556 15h4.194a1.25 1.25 0 1 1 0 2.5h-4.194l2.674 2.674a1.25 1.25 0 1 1-1.768 1.768L21.021 17.5H17.5v3.52l4.442 4.442a1.25 1.25 0 0 1-1.768 1.768L17.5 24.556v4.194a1.25 1.25 0 1 1-2.5 0v-4.194l-2.674 2.674a1.25 1.25 0 1 1-1.768-1.768L15 21.021V17.5h-3.52l-4.442 4.442a1.25 1.25 0 0 1-1.768-1.768L7.944 17.5H3.75a1.25 1.25 0 1 1 0-2.5h4.194L5.27 12.326a1.25 1.25 0 0 1 1.768-1.768L11.479 15H15v-3.52l-4.442-4.442a1.25 1.25 0 0 1 1.768-1.768L15 7.944V3.75c0-.69.56-1.25 1.25-1.25"></svg:path><svg:path fill="url(#fluentColorWeatherSnowflake321)" d="M16.25 2.5c.69 0 1.25.56 1.25 1.25v4.194l2.674-2.674a1.25 1.25 0 0 1 1.768 1.768L17.5 11.479V15h3.52l4.442-4.442a1.25 1.25 0 0 1 1.768 1.768L24.556 15h4.194a1.25 1.25 0 1 1 0 2.5h-4.194l2.674 2.674a1.25 1.25 0 1 1-1.768 1.768L21.021 17.5H17.5v3.52l4.442 4.442a1.25 1.25 0 0 1-1.768 1.768L17.5 24.556v4.194a1.25 1.25 0 1 1-2.5 0v-4.194l-2.674 2.674a1.25 1.25 0 1 1-1.768-1.768L15 21.021V17.5h-3.52l-4.442 4.442a1.25 1.25 0 0 1-1.768-1.768L7.944 17.5H3.75a1.25 1.25 0 1 1 0-2.5h4.194L5.27 12.326a1.25 1.25 0 0 1 1.768-1.768L11.479 15H15v-3.52l-4.442-4.442a1.25 1.25 0 0 1 1.768-1.768L15 7.944V3.75c0-.69.56-1.25 1.25-1.25"></svg:path><svg:defs><svg:lineargradient id="fluentColorWeatherSnowflake320" x1="23.125" x2="10.234" y1="24.844" y2="5.078" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4894FE"></svg:stop><svg:stop offset=".495" stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorWeatherSnowflake321" x1="9.153" x2="30.157" y1="3.609" y2="30.939" gradientUnits="userSpaceOnUse"><svg:stop offset=".379" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8" stop-opacity=".7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWeatherSnowflake32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
