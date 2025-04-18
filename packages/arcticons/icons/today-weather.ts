import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTodayWeatherIcon],svg[arcticons-today-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.364 45.5l6.359-1.907l-11.446-3.816l15.897-3.179l-20.348-5.087c22.255-1.907 30.521-4.45 30.521-7.63c0-28.613-40.694-27.977-40.694-1.272"></svg:path>`,
})
export class ArcticonsTodayWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
