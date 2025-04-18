import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReset32RegularIcon],svg[fluent-arrow-reset-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.707 3.293a1 1 0 0 1 0 1.414L5.414 8H17.5C23.299 8 28 12.701 28 18.5S23.299 29 17.5 29S7 24.299 7 18.5a1 1 0 1 1 2 0a8.5 8.5 0 1 0 8.5-8.5H5.414l3.293 3.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowReset32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
