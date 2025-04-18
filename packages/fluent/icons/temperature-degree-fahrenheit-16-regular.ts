import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit16RegularIcon],svg[fluent-temperature-degree-fahrenheit-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0V8h4a.5.5 0 0 0 0-1H9V4h4.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
