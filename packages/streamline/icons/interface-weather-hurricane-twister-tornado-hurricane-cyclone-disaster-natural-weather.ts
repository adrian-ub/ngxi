import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceWeatherHurricaneTwisterTornadoHurricaneCycloneDisasterNaturalWeatherIcon],svg[streamline-interface-weather-hurricane-twister-tornado-hurricane-cyclone-disaster-natural-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="7" cy="3" rx="6" ry="2.5"></svg:ellipse><svg:path d="M11.87 6.73c-.87.79-2.73 1.34-4.94 1.34A10.17 10.17 0 0 1 3 7.37m7.86 2.47a6.84 6.84 0 0 1-3.36.73a8.47 8.47 0 0 1-2.5-.35m5.37 3.22c-.95.21-1.83-.16-2-.83"></svg:path></svg:g>`,
})
export class StreamlineInterfaceWeatherHurricaneTwisterTornadoHurricaneCycloneDisasterNaturalWeatherIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
