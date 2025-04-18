import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit48RegularIcon],svg[fluent-temperature-degree-fahrenheit-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m12.75 0C23.56 8 23 8.56 23 9.25v29.5a1.25 1.25 0 1 0 2.5 0V25h13.25a1.25 1.25 0 1 0 0-2.5H25.5v-12h15.25a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
