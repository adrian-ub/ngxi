import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader1Lines24FilledIcon],svg[fluent-text-header-1-lines-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 1 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m11-5c0 .55.45 1 1 1s1-.45 1-1V3a1.004 1.004 0 0 0-1.89-.46c-.5 1-1.53 1.55-1.56 1.56c-.49.25-.69.85-.44 1.34a.99.99 0 0 0 1.394.42c.092-.05.275-.15.496-.3z"></svg:path>`,
})
export class FluentTextHeader1Lines24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
