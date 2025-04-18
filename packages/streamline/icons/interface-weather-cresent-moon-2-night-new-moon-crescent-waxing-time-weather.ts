import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherCresentMoon2NightNewMoonCrescentWaxingTimeWeatherIcon],svg[streamline-interface-weather-cresent-moon-2-night-new-moon-crescent-waxing-time-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 7a7 7 0 0 0-3.47-6A6.58 6.58 0 0 1 5 .5a6.5 6.5 0 1 1 0 13a6.58 6.58 0 0 1-2.47-.5A7 7 0 0 0 6 7Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherCresentMoon2NightNewMoonCrescentWaxingTimeWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
