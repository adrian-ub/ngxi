import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherCloud2CloudMeteorologyCloudyOvercastCoverWeatherIcon],svg[streamline-interface-weather-cloud-2-cloud-meteorology-cloudy-overcast-cover-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 6.5a2.51 2.51 0 0 0-1.5.5h0A4.5 4.5 0 1 0 5 11.5h6a2.5 2.5 0 0 0 0-5Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherCloud2CloudMeteorologyCloudyOvercastCoverWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
