import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWeatherSunnyLow20FilledIcon],svg[fluent-weather-sunny-low-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.662 11a4.481 4.481 0 1 1 8.746 0H17.5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1zm4.473 7a.5.5 0 0 1-.22 0zM5.076 4.382l-.069-.058a.5.5 0 0 0-.638.765l.858.858l.07.058a.5.5 0 0 0 .638-.765zm10.663.637a.5.5 0 0 0-.765-.637l-.859.858l-.058.07a.5.5 0 0 0 .765.637l.859-.858zM10.52 2.435a.5.5 0 0 0-.992.09v1.213l.008.09a.5.5 0 0 0 .992-.09V2.524zM8.5 16a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM5 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 5 14"></svg:path>`,
})
export class FluentWeatherSunnyLow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
