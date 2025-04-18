import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherSnow1CloudSnowSnowfallOvercastWeatherPrecipitationMeteorologyIcon],svg[streamline-interface-weather-snow-1-cloud-snow-snowfall-overcast-weather-precipitation-meteorology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 10a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75Zm-2 2.5a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75Zm6-2.5a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75ZM5 12.5a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75Zm5.75-2.5a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75ZM9 12.5a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75Zm3.75 0a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 8a2.5 2.5 0 1 0-.62-4.92a3.5 3.5 0 0 0-6.76 0A2.5 2.5 0 1 0 3 8Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherSnow1CloudSnowSnowfallOvercastWeatherPrecipitationMeteorologyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
