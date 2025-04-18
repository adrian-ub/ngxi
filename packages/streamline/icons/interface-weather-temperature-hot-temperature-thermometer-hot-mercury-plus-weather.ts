import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherTemperatureHotTemperatureThermometerHotMercuryPlusWeatherIcon],svg[streamline-interface-weather-temperature-hot-temperature-thermometer-hot-mercury-plus-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 9V2A1.5 1.5 0 0 0 10 .5h0A1.5 1.5 0 0 0 8.5 2v7a2.5 2.5 0 1 0 3 0Zm-10-6.5h3.98M3.49.51v3.98"></svg:path>`,
})
export class StreamlineInterfaceWeatherTemperatureHotTemperatureThermometerHotMercuryPlusWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
