import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise24RegularIcon],svg[fluent-arrow-clockwise-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 7.419 6.392c-.067-.454.265-.892.724-.892c.37 0 .696.256.752.623Q21 11.297 21 12a9 9 0 1 1-3-6.708V4.25a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.35a7.47 7.47 0 0 0-5.1-2"></svg:path>`,
})
export class FluentArrowClockwise24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
