import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherBlowingSnow48FilledIcon],svg[fluent-weather-blowing-snow-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 6a8.5 8.5 0 0 0-8.5 8.5a1.5 1.5 0 0 0 3 0a5.5 5.5 0 1 1 5.5 5.5h-17a1.5 1.5 0 0 0 0 3h17a8.5 8.5 0 0 0 0-17m14.904 12a6.5 6.5 0 0 0-6.306 4.924l-.053.212a1.5 1.5 0 1 0 2.91.728l.053-.213A3.5 3.5 0 0 1 37.404 21h.096a3.5 3.5 0 1 1 0 7h-32a1.5 1.5 0 0 0 0 3H30a3 3 0 1 1-2.77 4.154l-.095-.23a1.5 1.5 0 1 0-2.77 1.153l.097.23A6 6 0 1 0 35.197 31H37.5a6.5 6.5 0 1 0 0-13zM17.5 42a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M38.5 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class FluentWeatherBlowingSnow48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
