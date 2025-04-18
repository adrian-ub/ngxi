import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit24RegularIcon],svg[fluent-temperature-degree-fahrenheit-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.75 0a.75.75 0 0 0-.75.75v12.5a.75.75 0 0 0 1.5 0V12.5h5.75a.75.75 0 0 0 0-1.5H13V6.5h6.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
