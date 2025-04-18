import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodePyRectangle16FilledIcon],svg[fluent-code-py-rectangle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7H5v1h.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m6.75-4h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3M6.561 8.561A1.5 1.5 0 0 1 5.5 9H5v1.5a.5.5 0 1 1-1 0v-4a.5.5 0 0 1 .5-.5h1A1.503 1.503 0 0 1 7 7.5c0 .398-.158.779-.439 1.061M11.4 6.8L10 8.666V10.5a.5.5 0 1 1-1 0V8.666L7.6 6.8a.502.502 0 0 1 .471-.795a.5.5 0 0 1 .329.195l1.1 1.467L10.6 6.2a.5.5 0 0 1 .7-.1a.5.5 0 0 1 .1.7"></svg:path>`,
})
export class FluentCodePyRectangle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
