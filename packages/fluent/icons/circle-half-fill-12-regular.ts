import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill12RegularIcon],svg[fluent-circle-half-fill-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a4 4 0 1 1 8 0zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 6 1"></svg:path>`,
})
export class FluentCircleHalfFill12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
