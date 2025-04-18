import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit48FilledIcon],svg[fluent-temperature-degree-fahrenheit-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14m12.5 0A1.5 1.5 0 0 0 23 9.5v29a1.5 1.5 0 0 0 3 0V25h12.5a1.5 1.5 0 0 0 0-3H26V11h14.5a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
