import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUpDown20FilledIcon],svg[fluent-chevron-up-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.53 2.72a.75.75 0 0 0-1.06 0L5.22 6.97a.75.75 0 0 0 1.06 1.06L10 4.31l3.72 3.72a.75.75 0 1 0 1.06-1.06zm4.25 10.31l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 15.69l3.72-3.72a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class FluentChevronUpDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
