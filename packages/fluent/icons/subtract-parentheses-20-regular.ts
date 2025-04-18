import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractParentheses20RegularIcon],svg[fluent-subtract-parentheses-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.8 4.4a.5.5 0 0 0-.601-.8A7.99 7.99 0 0 0 2 10a7.99 7.99 0 0 0 3.199 6.4a.5.5 0 0 0 .6-.8A6.99 6.99 0 0 1 3 10a6.99 6.99 0 0 1 2.8-5.6m9.001-.8a.5.5 0 0 0-.6.8A6.99 6.99 0 0 1 17 10a6.99 6.99 0 0 1-2.8 5.6a.5.5 0 1 0 .601.8A7.99 7.99 0 0 0 18 10a7.99 7.99 0 0 0-3.199-6.4M6.5 9.5a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentSubtractParentheses20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
