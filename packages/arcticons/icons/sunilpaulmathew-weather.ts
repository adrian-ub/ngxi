import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSunilpaulmathewWeatherIcon],svg[arcticons-sunilpaulmathew-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.997" cy="23.995" r="9.438" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 23.995h7.346M23.997 45.5v-7.35m0-28.3V2.5m14.157 21.495H45.5M8.79 39.192l5.195-5.194M39.2 39.2l-5.198-5.198M13.989 13.991L8.79 8.794m25.212 5.19l5.194-5.194"></svg:path>`,
})
export class ArcticonsSunilpaulmathewWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
