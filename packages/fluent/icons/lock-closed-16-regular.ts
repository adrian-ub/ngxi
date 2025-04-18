import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed16RegularIcon],svg[fluent-lock-closed-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 4h-.5A2.5 2.5 0 0 0 2 6.5v5A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 11.5 4H11v-.5a3 3 0 0 0-6 0zm1-.5a2 2 0 1 1 4 0V4H6zM11.5 5A1.5 1.5 0 0 1 13 6.5v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-5A1.5 1.5 0 0 1 4.5 5z"></svg:path>`,
})
export class FluentLockClosed16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
