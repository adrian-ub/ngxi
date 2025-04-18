import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill16RegularIcon],svg[fluent-circle-half-fill-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0M3 8h10A5 5 0 0 0 3 8"></svg:path>`,
})
export class FluentCircleHalfFill16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
