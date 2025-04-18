import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit28RegularIcon],svg[fluent-temperature-degree-fahrenheit-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0M7 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m6.75 0a.75.75 0 0 0-.75.75v16.5a.75.75 0 0 0 1.5 0V14.5h7.75a.75.75 0 0 0 0-1.5H14.5V6.5h8.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
