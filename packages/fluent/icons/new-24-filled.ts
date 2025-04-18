import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNew24FilledIcon],svg[fluent-new-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1M4 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M7.707 6.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class FluentNew24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
