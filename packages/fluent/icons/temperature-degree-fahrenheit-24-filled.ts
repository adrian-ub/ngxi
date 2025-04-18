import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit24FilledIcon],svg[fluent-temperature-degree-fahrenheit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M6.5 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M13 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0v-5h5.5a1 1 0 1 0 0-2H14V7h6a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
