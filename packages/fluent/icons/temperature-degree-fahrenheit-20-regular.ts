import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit20RegularIcon],svg[fluent-temperature-degree-fahrenheit-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m5 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V10h5a.5.5 0 0 0 0-1h-5V5h5.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
