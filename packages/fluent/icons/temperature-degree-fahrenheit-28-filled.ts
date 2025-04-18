import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit28FilledIcon],svg[fluent-temperature-degree-fahrenheit-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7 0a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V7h8a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
