import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherRain2CloudRainRainyMeteorologyPrecipitationWeatherIcon],svg[streamline-interface-weather-rain-2-cloud-rain-rainy-meteorology-precipitation-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 11.5l.5-1m4 1l.5-1m-3.25 3l.5-1m-5 1l.5-1m8.5 1l.5-1m-.5-4.5a2.5 2.5 0 0 0 0-5a2.54 2.54 0 0 0-1.57.55A3.75 3.75 0 1 0 5 8Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherRain2CloudRainRainyMeteorologyPrecipitationWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
