import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractCircle12RegularIcon],svg[fluent-subtract-circle-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1M2 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class FluentSubtractCircle12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
