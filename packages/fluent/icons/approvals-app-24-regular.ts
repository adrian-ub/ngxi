import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApprovalsApp24RegularIcon],svg[fluent-approvals-app-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.78 1.72a.75.75 0 1 0-1.06 1.06L11.94 4a9 9 0 1 0 9.023 9.82a.75.75 0 0 0-1.494-.135A7.5 7.5 0 1 1 11.94 5.5l-1.22 1.22a.75.75 0 0 0 1.061 1.06l2.5-2.5a.75.75 0 0 0 0-1.06zm4.004 8.5a.75.75 0 0 1 0 1.06l-4.504 4.504a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.469l3.973-3.973a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentApprovalsApp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
