import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherGibbousMoon1NightMoonWeatherGibbousTimeWaningIcon],svg[streamline-interface-weather-gibbous-moon-1-night-moon-weather-gibbous-time-waning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7a6.5 6.5 0 0 0 6.5 6.5a6.58 6.58 0 0 0 1.19-.11a10 10 0 0 0 0-12.78A6.58 6.58 0 0 0 8.5.5A6.5 6.5 0 0 0 2 7Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherGibbousMoon1NightMoonWeatherGibbousTimeWaningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
