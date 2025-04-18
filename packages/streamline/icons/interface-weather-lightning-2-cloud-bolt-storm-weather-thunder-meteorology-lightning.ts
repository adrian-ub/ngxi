import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherLightning2CloudBoltStormWeatherThunderMeteorologyLightningIcon],svg[streamline-interface-weather-lightning-2-cloud-bolt-storm-weather-thunder-meteorology-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.78 9.38A2.5 2.5 0 1 0 9.5 5h0a4.5 4.5 0 1 0-5.75 4.32"></svg:path><svg:path d="m8 8l-2 2.5h3l-2 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherLightning2CloudBoltStormWeatherThunderMeteorologyLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
