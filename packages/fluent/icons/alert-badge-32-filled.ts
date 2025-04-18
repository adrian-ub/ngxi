import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlertBadge32FilledIcon],svg[fluent-alert-badge-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13a9 9 0 0 1 14.084-7.428A4.5 4.5 0 0 0 25 13.388v3.42l1.928 4.82A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807zm5.125 12A3.99 3.99 0 0 0 16 28a3.99 3.99 0 0 0 3.875-3zM24 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class FluentAlertBadge32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
