import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherRainDropDropsRainRainyMeteorologyWaterPrecipitationWeatherIcon],svg[streamline-interface-weather-rain-drop-drops-rain-rainy-meteorology-water-precipitation-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 9C11.5 6.51 7 .5 7 .5S2.5 6.51 2.5 9a4.5 4.5 0 0 0 9 0Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherRainDropDropsRainRainyMeteorologyWaterPrecipitationWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
