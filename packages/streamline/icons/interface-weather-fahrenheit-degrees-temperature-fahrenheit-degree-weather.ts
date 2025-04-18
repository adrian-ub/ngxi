import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherFahrenheitDegreesTemperatureFahrenheitDegreeWeatherIcon],svg[streamline-interface-weather-fahrenheit-degrees-temperature-fahrenheit-degree-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2.5" cy="2" r="1.5"></svg:circle><svg:path d="M7 13.5v-12h6M7 7h4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherFahrenheitDegreesTemperatureFahrenheitDegreeWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
