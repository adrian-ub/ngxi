import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit32FilledIcon],svg[fluent-temperature-degree-fahrenheit-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 5a5 5 0 1 0 0 10A5 5 0 0 0 8 5m8.75 0c-.69 0-1.25.56-1.25 1.25v19.5a1.25 1.25 0 1 0 2.5 0V17h7.75a1.25 1.25 0 1 0 0-2.5H18v-7h8.75a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
