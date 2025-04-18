import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperature48FilledIcon],svg[fluent-temperature-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 9a3.75 3.75 0 0 0-3.75 3.75v15.207l-.484.445a6.25 6.25 0 1 0 8.467 0l-.483-.445V12.75A3.75 3.75 0 0 0 24 9m-6.75 3.75a6.75 6.75 0 0 1 13.5 0v13.925a9.25 9.25 0 1 1-13.5 0zM28 33a4 4 0 1 1-5.5-3.71V18.5a1.5 1.5 0 0 1 3 0v10.79A4 4 0 0 1 28 33"></svg:path>`,
})
export class FluentTemperature48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
