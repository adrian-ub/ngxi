import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill16FilledIcon],svg[fluent-circle-half-fill-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0M3.5 8h9a4.5 4.5 0 1 0-9 0"></svg:path>`,
})
export class FluentCircleHalfFill16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
