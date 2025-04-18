import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleMultiple20FilledIcon],svg[fluent-toggle-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A3.5 3.5 0 0 1 6.5 2h7a3.5 3.5 0 1 1 0 7h-7A3.5 3.5 0 0 1 3 5.5m5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M6.5 11a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentToggleMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
