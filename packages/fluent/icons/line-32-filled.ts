import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine32FilledIcon],svg[fluent-line-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.634 3.366a1.25 1.25 0 0 1 0 1.768l-23.5 23.5a1.25 1.25 0 0 1-1.768-1.768l23.5-23.5a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentLine32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
