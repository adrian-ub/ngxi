import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentErrorCircle20RegularIcon],svg[fluent-error-circle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 9.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M10 6a.5.5 0 0 1 .492.41l.008.09V11a.5.5 0 0 1-.992.09L9.5 11V6.5A.5.5 0 0 1 10 6"></svg:path>`,
})
export class FluentErrorCircle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
