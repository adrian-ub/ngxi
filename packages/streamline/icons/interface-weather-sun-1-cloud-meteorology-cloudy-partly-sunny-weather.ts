import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherSun1CloudMeteorologyCloudyPartlySunnyWeatherIcon],svg[streamline-interface-weather-sun-1-cloud-meteorology-cloudy-partly-sunny-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 1.93a3 3 0 0 1 4.5 2.57a3.12 3.12 0 0 1-.21 1.11m-2.317 1.56a3.421 3.421 0 0 0-.46 0a3.43 3.43 0 0 0-6.71 0c-.15-.01-.3-.01-.45 0a2.67 2.67 0 1 0 0 5.33h7.62a2.67 2.67 0 0 0 0-5.33v0Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherSun1CloudMeteorologyCloudyPartlySunnyWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
