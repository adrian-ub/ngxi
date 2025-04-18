import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperatureDegreeCelsius16FilledIcon],svg[fluent-temperature-degree-celsius-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M11 4.5C9.401 4.5 8 5.76 8 8s1.401 3.5 3 3.5c.882 0 1.703-.382 2.263-1.101c.181-.233.446-.399.741-.399c.564 0 .954.565.644 1.036A4.3 4.3 0 0 1 11 13c-2.544 0-4.5-2.053-4.5-5S8.456 3 11 3c1.525 0 2.84.738 3.648 1.964c.31.471-.08 1.036-.644 1.036c-.295 0-.56-.166-.741-.399A2.83 2.83 0 0 0 11 4.5"></svg:path>`,
})
export class FluentTemperatureDegreeCelsius16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
