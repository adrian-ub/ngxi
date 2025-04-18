import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDoubleUp16FilledIcon],svg[fluent-chevron-double-up-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.26 8.3a.75.75 0 1 1-1.02-1.1l4.25-4a.75.75 0 0 1 1.02 0l4.25 4a.75.75 0 1 1-1.02 1.1L8 4.773zm0 4a.75.75 0 0 1-1.02-1.1l4.25-4a.75.75 0 0 1 1.02 0l4.25 4a.75.75 0 1 1-1.02 1.1L8 8.773z"></svg:path>`,
})
export class FluentChevronDoubleUp16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
