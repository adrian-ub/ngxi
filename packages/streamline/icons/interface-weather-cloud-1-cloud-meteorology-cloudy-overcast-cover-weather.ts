import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherCloud1CloudMeteorologyCloudyOvercastCoverWeatherIcon],svg[streamline-interface-weather-cloud-1-cloud-meteorology-cloudy-overcast-cover-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.726 5.706a2.34 2.34 0 0 0-.449 0a3.356 3.356 0 0 0-6.554 0a2.34 2.34 0 0 0-.45 0a2.614 2.614 0 1 0 0 5.219h7.453a2.613 2.613 0 1 0 0-5.219Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherCloud1CloudMeteorologyCloudyOvercastCoverWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
