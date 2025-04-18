import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit32RegularIcon],svg[fluent-temperature-degree-fahrenheit-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M7.5 5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M16 5a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V7h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
