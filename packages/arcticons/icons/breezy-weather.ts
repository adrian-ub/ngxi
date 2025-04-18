import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreezyWeatherIcon],svg[arcticons-breezy-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24V9h15zm0 0h15v15zm0 0v15H9zm0 0H9V9z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 24c0-3.04-1.23-5.79-3.22-7.78M24 35c3.04 0 5.79-1.23 7.78-3.22M13 24c0 3.04 1.23 5.79 3.22 7.78M24 13c-3.04 0-5.79 1.23-7.78 3.22m0 0L24 9m15 15l-7.22-7.78M24 39l7.78-7.22M9 24l7.22 7.78"></svg:path>`,
})
export class ArcticonsBreezyWeatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
