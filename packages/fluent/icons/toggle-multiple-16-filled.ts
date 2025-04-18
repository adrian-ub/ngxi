import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleMultiple16FilledIcon],svg[fluent-toggle-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm1 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 8a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6zm6 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentToggleMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
