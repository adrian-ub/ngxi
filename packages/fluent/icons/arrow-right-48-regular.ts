import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRight48RegularIcon],svg[fluent-arrow-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24c0-.69.56-1.25 1.25-1.25h32.446L24.874 10.14a1.25 1.25 0 1 1 1.752-1.782l14.988 14.738l.027.026a1.25 1.25 0 0 1 .352 1.009a1.25 1.25 0 0 1-.393.785L26.626 39.641a1.25 1.25 0 1 1-1.752-1.782l12.822-12.61H5.25A1.25 1.25 0 0 1 4 24"></svg:path>`,
})
export class FluentArrowRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
