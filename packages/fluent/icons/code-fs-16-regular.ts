import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeFs16RegularIcon],svg[fluent-code-fs-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 9H13V7h1.25a.5.5 0 1 0 0-1H13V5a.5.5 0 0 0-1 0v1h-2V5a.5.5 0 0 0-1 0v1H8a.5.5 0 0 0 0 1h1v2H8a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h2v1a.5.5 0 0 0 1 0v-1h1.25a.5.5 0 1 0 0-1M10 9V7h2v2zM6.5 4.5A.5.5 0 0 1 6 5H3v2.5h2.5a.5.5 0 0 1 0 1H3v3a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentCodeFs16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
