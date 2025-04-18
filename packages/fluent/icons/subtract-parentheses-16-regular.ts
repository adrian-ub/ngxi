import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractParentheses16RegularIcon],svg[fluent-subtract-parentheses-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.77 2.943a.5.5 0 1 0-.54-.842A7 7 0 0 0 1 8a7 7 0 0 0 3.23 5.898a.5.5 0 1 0 .54-.842A6 6 0 0 1 2 8a6 6 0 0 1 2.77-5.057m7-.842a.5.5 0 0 0-.54.842A6 6 0 0 1 14 8a6 6 0 0 1-2.77 5.057a.5.5 0 1 0 .54.842A7 7 0 0 0 15 8a7 7 0 0 0-3.23-5.9M5.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentSubtractParentheses16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
