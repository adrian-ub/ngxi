import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOneplusWeatherIcon],svg[arcticons-oneplus-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.507 15.032a11.25 11.25 0 1 1 17.628 13.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.484 18.734a11.591 11.591 0 1 1 8.197 19.787m-8.295.072a9.895 9.895 0 0 1 0-19.79"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.64 26.147a6.136 6.136 0 0 1 6.137 6.136h0a6.136 6.136 0 0 1-6.136 6.137h0m-.001 0l-20.254.173"></svg:path>`,
})
export class ArcticonsOneplusWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
