import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApprovalsApp16RegularIcon],svg[fluent-approvals-app-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.854.146a.5.5 0 1 0-.708.708l1.15 1.15A6.5 6.5 0 1 0 15 8.5v-.04a.47.47 0 0 0-.48-.46h-.042a.49.49 0 0 0-.478.5a5.5 5.5 0 1 1-5.711-5.496L7.146 4.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708zm4 6a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentApprovalsApp16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
