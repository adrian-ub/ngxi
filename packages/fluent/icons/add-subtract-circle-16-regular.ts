import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSubtractCircle16RegularIcon],svg[fluent-add-subtract-circle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5m-3-6a.5.5 0 0 0-1 0v1H4a.5.5 0 0 0 0 1h1v.8a.5.5 0 0 0 1 0v-.8h1a.5.5 0 0 0 0-1H6zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-1a5.98 5.98 0 0 1-3.874-1.418l8.456-8.456A6 6 0 0 1 8 14m-4.582-2.126a6 6 0 0 1 8.456-8.456z"></svg:path>`,
})
export class FluentAddSubtractCircle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
