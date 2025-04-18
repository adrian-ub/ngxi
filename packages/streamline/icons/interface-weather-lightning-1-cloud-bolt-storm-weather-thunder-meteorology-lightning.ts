import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherLightning1CloudBoltStormWeatherThunderMeteorologyLightningIcon],svg[streamline-interface-weather-lightning-1-cloud-bolt-storm-weather-thunder-meteorology-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 7L6 10.5h3l-2 3"></svg:path><svg:path d="M11 8a2.5 2.5 0 1 0-.62-4.92a3.5 3.5 0 0 0-6.76 0A2.5 2.5 0 1 0 3 8h1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherLightning1CloudBoltStormWeatherThunderMeteorologyLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
