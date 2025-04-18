import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherUmbrellaStormRainUmbrellaOpenWeatherIcon],svg[streamline-interface-weather-umbrella-storm-rain-umbrella-open-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7a5 5 0 0 1 10 0Zm5-5V.5M10 12a1.5 1.5 0 0 1-3 0V7"></svg:path>`,
})
export class StreamlineInterfaceWeatherUmbrellaStormRainUmbrellaOpenWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
