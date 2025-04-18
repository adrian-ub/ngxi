import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtract28RegularIcon],svg[fluent-subtract-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.75a.75.75 0 0 1 .75-.75h20.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentSubtract28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
