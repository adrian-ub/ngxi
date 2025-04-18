import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherCelsiusDegreesTemperatureCentigradeCelsiusDegreeWeatherIcon],svg[streamline-interface-weather-celsius-degrees-temperature-centigrade-celsius-degree-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2" cy="2" r="1.5"></svg:circle><svg:path d="M13.5 1.84a6 6 0 1 0-2 11.66a6 6 0 0 0 2-.34"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherCelsiusDegreesTemperatureCentigradeCelsiusDegreeWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
