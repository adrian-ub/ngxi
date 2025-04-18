import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFolderWeatherIcon],svg[arcticons-folder-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.678 13.044H24.77c-1.963-.108-5.931-4.238-8.188-4.238H6.68v-.001a2.176 2.176 0 0 0-2.18 2.171v7.307h39v-3.418a1.822 1.822 0 0 0-1.822-1.821Zm1.822 5.239h-39v18.733a2.176 2.176 0 0 0 2.174 2.18h34.645a2.176 2.176 0 0 0 2.181-2.172V18.283Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.693 25.52a3.22 3.22 0 1 1-3.22 3.22a3.22 3.22 0 0 1 3.22-3.22Zm0-2.781v.788m6 5.212h-.788m-5.212 6v-.788m-6-5.212h.788m9.455-4.243l-.557.557m.557 7.929l-.557-.557m-7.929.557l.557-.557m-.557-7.929l.557.557"></svg:path>`,
})
export class ArcticonsFolderWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
