import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherRain1CloudRainRainyMeteorologyPrecipitationWeatherIcon],svg[streamline-interface-weather-rain-1-cloud-rain-rainy-meteorology-precipitation-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.25 11.5l.5-1m4 1l.5-1M6 13.5l.5-1m-5 1l.5-1m8.5 1l.5-1M11 8a2.5 2.5 0 1 0-.62-4.92a3.5 3.5 0 0 0-6.76 0A2.5 2.5 0 1 0 3 8Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherRain1CloudRainRainyMeteorologyPrecipitationWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
