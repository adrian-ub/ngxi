import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit20FilledIcon],svg[fluent-temperature-degree-fahrenheit-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 7a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.75 0a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0V10.5h4.75a.75.75 0 0 0 0-1.5H11.5V5.5h5.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
