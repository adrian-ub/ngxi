import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSunny32LightIcon],svg[fluent-weather-sunny-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 16 2m0 24a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m0-16a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-7 6a7 7 0 1 1 14 0a7 7 0 0 1-14 0m-6.5-.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm24 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm.354 11.353a.5.5 0 0 1-.707 0l-3.075-3.075a.5.5 0 0 1 .707-.707l3.075 3.074a.5.5 0 0 1 0 .707M8.929 8.929a.5.5 0 0 1-.707 0L5.147 5.854a.5.5 0 1 1 .707-.708l3.075 3.076a.5.5 0 0 1 0 .707M5.854 26.853a.5.5 0 1 1-.708-.708l3.075-3.074a.5.5 0 1 1 .707.707zM23.778 8.929a.5.5 0 1 1-.707-.707l3.075-3.076a.5.5 0 1 1 .707.708z"></svg:path>`,
})
export class FluentWeatherSunny32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
