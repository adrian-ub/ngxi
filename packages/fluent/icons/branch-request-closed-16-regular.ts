import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchRequestClosed16RegularIcon],svg[fluent-branch-request-closed-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m4 0a2.5 2.5 0 0 1-2 2.45v4.1a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 6 3.5m-4 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m11-6a.5.5 0 0 0-1 0v3.55a2.5 2.5 0 1 0 1 0zm-.5 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-1.854-9.354a.5.5 0 0 1 .708 0L12.5 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.207 3.5l1.147 1.146a.5.5 0 0 1-.708.708L12.5 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L11.793 3.5l-1.147-1.146a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class FluentBranchRequestClosed16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
