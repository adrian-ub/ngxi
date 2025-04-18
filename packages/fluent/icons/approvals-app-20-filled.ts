import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApprovalsApp20FilledIcon],svg[fluent-approvals-app-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.78.72a.75.75 0 0 0-1.06 1.06L9.94 3H9.5a7.5 7.5 0 1 0 7.5 7.5a.75.75 0 0 0-1.5 0a6 6 0 1 1-6.061-6l-.72.72A.75.75 0 0 0 9.78 6.28l2.25-2.25a.75.75 0 0 0 0-1.06zm3.74 6.24a.75.75 0 0 1 .02 1.06l-3.85 4a.75.75 0 0 1-1.08 0l-1.65-1.714a.75.75 0 1 1 1.08-1.04l1.11 1.152l3.31-3.438a.75.75 0 0 1 1.06-.02"></svg:path>`,
})
export class FluentApprovalsApp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
