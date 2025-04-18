import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleHalfFill20RegularIcon],svg[fluent-circle-half-fill-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a7 7 0 0 1 14 0zm7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class FluentCircleHalfFill20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
