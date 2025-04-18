import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherSun2CloudMeteorologyCloudyPartlySunnyWeatherIcon],svg[streamline-interface-weather-sun-2-cloud-meteorology-cloudy-partly-sunny-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 8.5a2.51 2.51 0 0 0-1.5.5h0A4.5 4.5 0 1 0 5 13.5h6a2.5 2.5 0 0 0 0-5Z"></svg:path><svg:circle cx="11.25" cy="2.75" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceWeatherSun2CloudMeteorologyCloudyPartlySunnyWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
