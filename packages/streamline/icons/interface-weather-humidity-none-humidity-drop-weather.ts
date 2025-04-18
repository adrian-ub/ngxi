import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherHumidityNoneHumidityDropWeatherIcon],svg[streamline-interface-weather-humidity-none-humidity-drop-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M4.85 13a4.5 4.5 0 0 0 6.65-4a5.48 5.48 0 0 0-.5-1.94M9.6 4.4C8.37 2.34 7 .5 7 .5S2.5 6.51 2.5 9a4.42 4.42 0 0 0 .5 2"></svg:path>`,
})
export class StreamlineInterfaceWeatherHumidityNoneHumidityDropWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
