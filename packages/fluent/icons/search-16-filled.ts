import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch16FilledIcon],svg[fluent-search-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.823 10.883a5.5 5.5 0 1 1 1.06-1.06l2.897 2.897a.75.75 0 1 1-1.06 1.06zM10.5 6.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></svg:path>`,
})
export class FluentSearch16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
