import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherUmbrellaCloseStormRainUmbrellaCloseWeatherIcon],svg[streamline-interface-weather-umbrella-close-storm-rain-umbrella-close-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 9.5h-7l3-9h1l3 9zM7 9.5V12a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceWeatherUmbrellaCloseStormRainUmbrellaCloseWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
