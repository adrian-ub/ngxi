import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWeatherTornadoIcon],svg[mdi-weather-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-1 3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1m1 4a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1m-5 4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1m-3 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiWeatherTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
