import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSqualls48FilledIcon],svg[fluent-weather-squalls-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.5a8.5 8.5 0 1 1 8.5 8.5h-17a1.5 1.5 0 0 1 0-3h17a5.5 5.5 0 1 0-5.5-5.5a1.5 1.5 0 0 1-3 0m17.098 8.424A6.5 6.5 0 0 1 37.404 19h.096a6.5 6.5 0 1 1 0 13h-2.303a6 6 0 1 1-10.736 5.308l-.096-.231a1.5 1.5 0 1 1 2.77-1.154l.096.23A3 3 0 1 0 30 32H5.5a1.5 1.5 0 0 1 0-3h32a3.5 3.5 0 1 0 0-7h-.096a3.5 3.5 0 0 0-3.396 2.651l-.053.213a1.5 1.5 0 1 1-2.91-.728z"></svg:path>`,
})
export class FluentWeatherSqualls48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
