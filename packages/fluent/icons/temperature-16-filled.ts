import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTemperature16FilledIcon],svg[fluent-temperature-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.5a3 3 0 1 1 6 0v5.354a4 4 0 1 1-6 0zm3-1.5A1.5 1.5 0 0 0 6 3.5v5.975l-.23.22a2.5 2.5 0 1 0 3.461 0L9 9.476V3.5A1.5 1.5 0 0 0 7.5 2M8 6a.5.5 0 0 0-1 0v4.085a1.5 1.5 0 1 0 1 0z"></svg:path>`,
})
export class FluentTemperature16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
