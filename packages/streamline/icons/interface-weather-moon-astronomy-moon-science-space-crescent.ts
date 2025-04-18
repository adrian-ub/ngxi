import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherMoonAstronomyMoonScienceSpaceCrescentIcon],svg[streamline-interface-weather-moon-astronomy-moon-science-space-crescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 10.48A6.55 6.55 0 0 1 6.46.5a6.55 6.55 0 0 0 1 13A6.46 6.46 0 0 0 13 10.39a6.79 6.79 0 0 1-1 .09Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherMoonAstronomyMoonScienceSpaceCrescentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
