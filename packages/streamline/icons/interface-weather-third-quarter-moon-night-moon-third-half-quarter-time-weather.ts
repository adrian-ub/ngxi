import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherThirdQuarterMoonNightMoonThirdHalfQuarterTimeWeatherIcon],svg[streamline-interface-weather-third-quarter-moon-night-moon-third-half-quarter-time-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25 13.5a6.5 6.5 0 0 1 0-13Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherThirdQuarterMoonNightMoonThirdHalfQuarterTimeWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
