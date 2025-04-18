import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronDoubleUp20FilledIcon],svg[fluent-chevron-double-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.207 15.267a.75.75 0 0 1 .026-1.06l5.25-5.001a.75.75 0 0 1 1.034 0l5.25 5a.75.75 0 0 1-1.034 1.087L10 10.784l-4.733 4.51a.75.75 0 0 1-1.06-.027m0-4.998a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.034 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 5.786l-4.733 4.509a.75.75 0 0 1-1.06-.026"></svg:path>`,
})
export class FluentChevronDoubleUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
