import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingWeatherAltIcon],svg[arcticons-nothing-weather-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.5" cy="35.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.5" cy="38.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.5" cy="35.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.5" cy="38.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="35.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="38.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.5" cy="14.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.5" cy="17.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="14.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="31.5" cy="14.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="17.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.5" cy="17.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.25" cy="20.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.5" cy="17.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="20.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.5" cy="23.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.5" cy="26.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.5" cy="20.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="23.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="26.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="29.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.25" cy="12.25" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNothingWeatherAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
