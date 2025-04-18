import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingWeatherIcon],svg[arcticons-nothing-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.245" cy="11.467" r="3.745" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.263 32.488c5.653 0 10.237-4.583 10.237-10.237s-4.583-10.238-10.237-10.238c-4.597 0-8.486 3.03-9.78 7.202a7.4 7.4 0 0 0-4.578-1.586a7.43 7.43 0 0 0 0 14.86z"></svg:path><svg:circle cx="31.806" cy="36.096" r=".836" fill="currentColor"></svg:circle><svg:circle cx="28.461" cy="39.441" r=".836" fill="currentColor"></svg:circle><svg:circle cx="24" cy="36.096" r=".836" fill="currentColor"></svg:circle><svg:circle cx="20.655" cy="39.441" r=".836" fill="currentColor"></svg:circle><svg:circle cx="16.194" cy="36.096" r=".836" fill="currentColor"></svg:circle><svg:circle cx="12.849" cy="39.441" r=".836" fill="currentColor"></svg:circle>`,
})
export class ArcticonsNothingWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
