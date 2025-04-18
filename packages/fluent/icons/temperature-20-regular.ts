import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperature20RegularIcon],svg[fluent-temperature-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5a.5.5 0 0 1 .5.5v5.063a2 2 0 1 1-1 0V7a.5.5 0 0 1 .5-.5M10 2a3 3 0 0 0-3 3v6.354a4 4 0 1 0 6 0V5a3 3 0 0 0-3-3m0 1a2 2 0 0 1 2 2v6.755l.143.145a3 3 0 1 1-4.286 0L8 11.755V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentTemperature20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
