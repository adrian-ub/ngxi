import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSubtractCircle16FilledIcon],svg[fluent-add-subtract-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 10a.5.5 0 0 0 0 1H12a.5.5 0 0 0 0-1zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-1a5.98 5.98 0 0 1-3.874-1.418l8.455-8.456A6 6 0 0 1 8 14M3.5 6a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 1 1 0 1H6v.8a.5.5 0 0 1-1 0v-.8H4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentAddSubtractCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
