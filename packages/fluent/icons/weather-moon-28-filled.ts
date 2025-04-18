import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherMoon28FilledIcon],svg[fluent-weather-moon-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.668 2.97a.75.75 0 0 1 .788-.93C20.627 2.536 25.48 7.7 25.48 14c0 6.628-5.373 12-12 12A12 12 0 0 1 3.1 20.028a.75.75 0 0 1 .47-1.106c1.599-.393 3.55-1.024 5.32-2.004c1.773-.983 3.31-2.287 4.169-4.003c1.713-3.427 1.26-7.345.608-9.945"></svg:path>`,
})
export class FluentWeatherMoon28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
