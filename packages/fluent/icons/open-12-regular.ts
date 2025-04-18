import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOpen12RegularIcon],svg[fluent-open-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a.5.5 0 0 1 1 0v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a.5.5 0 0 1 0 1zm3 0a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V3.707L7.354 5.354a.5.5 0 1 1-.708-.708L8.293 3z"></svg:path>`,
})
export class FluentOpen12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
