import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherTemperatureTemperatureThermometerWeatherLevelMeterMercuryMeasureIcon],svg[streamline-interface-weather-temperature-temperature-thermometer-weather-level-meter-mercury-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9V2A1.5 1.5 0 0 0 7 .5h0A1.5 1.5 0 0 0 5.5 2v7a2.5 2.5 0 1 0 3 0Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherTemperatureTemperatureThermometerWeatherLevelMeterMercuryMeasureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
