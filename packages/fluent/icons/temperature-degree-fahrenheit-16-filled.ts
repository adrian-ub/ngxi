import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeFahrenheit16FilledIcon],svg[fluent-temperature-degree-fahrenheit-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.25 0a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0V8.5h3.75a.75.75 0 0 0 0-1.5H9.5V4.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTemperatureDegreeFahrenheit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
