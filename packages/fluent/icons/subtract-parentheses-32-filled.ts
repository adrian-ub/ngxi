import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractParentheses32FilledIcon],svg[fluent-subtract-parentheses-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.56 7.23a1.25 1.25 0 0 0-1.618-1.905A13.97 13.97 0 0 0 2 16a13.97 13.97 0 0 0 4.942 10.675a1.25 1.25 0 1 0 1.618-1.906A11.47 11.47 0 0 1 4.5 16c0-3.514 1.574-6.658 4.06-8.77m16.498-1.905a1.25 1.25 0 1 0-1.618 1.906A11.47 11.47 0 0 1 27.5 16c0 3.513-1.574 6.658-4.06 8.77a1.25 1.25 0 0 0 1.618 1.905A13.97 13.97 0 0 0 30 16a13.97 13.97 0 0 0-4.942-10.675M10.25 14.75a1.25 1.25 0 1 0 0 2.5h11.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentSubtractParentheses32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
