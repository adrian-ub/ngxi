import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherMoon32FilledIcon],svg[fluent-weather-moon-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 22.965c-.539-.938.21-1.965 1.15-1.965c6.627 0 12-5.373 12-12c0-1.43-.25-2.8-.708-4.07a2.12 2.12 0 0 1 .254-1.934a1.88 1.88 0 0 1 1.883-.785C24.006 3.363 29.001 9.097 29.001 16c0 7.732-6.268 14-14 14a14 14 0 0 1-12.147-7.035"></svg:path>`,
})
export class FluentWeatherMoon32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
