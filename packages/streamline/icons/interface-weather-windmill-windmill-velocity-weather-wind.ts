import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherWindmillWindmillVelocityWeatherWindIcon],svg[streamline-interface-weather-windmill-windmill-velocity-weather-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5h1a2 2 0 0 1 2 2V7h0h-3h0V.5h0ZM4 7h3v6.5h0h-1a2 2 0 0 1-2-2V7h0Zm9.5 0v1a2 2 0 0 1-2 2H7h0V7h6.5ZM7 4v3h0H.5h0V6a2 2 0 0 1 2-2H7Z"></svg:path>`,
})
export class StreamlineInterfaceWeatherWindmillWindmillVelocityWeatherWindIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
