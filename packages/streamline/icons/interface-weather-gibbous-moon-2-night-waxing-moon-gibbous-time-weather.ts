import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherGibbousMoon2NightWaxingMoonGibbousTimeWeatherIcon],svg[streamline-interface-weather-gibbous-moon-2-night-waxing-moon-gibbous-time-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 7a6.5 6.5 0 0 1-6.5 6.5a6.58 6.58 0 0 1-1.19-.11a10 10 0 0 1 0-12.78A6.58 6.58 0 0 1 5.5.5A6.5 6.5 0 0 1 12 7Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherGibbousMoon2NightWaxingMoonGibbousTimeWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
