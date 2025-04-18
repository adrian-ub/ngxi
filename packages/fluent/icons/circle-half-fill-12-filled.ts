import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill12FilledIcon],svg[fluent-circle-half-fill-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6m1.5 0h7a3.5 3.5 0 1 0-7 0"></svg:path>`,
})
export class FluentCircleHalfFill12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
