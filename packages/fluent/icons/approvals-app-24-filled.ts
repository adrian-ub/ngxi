import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApprovalsApp24FilledIcon],svg[fluent-approvals-app-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.543 1.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414l.758-.759a7 7 0 1 0 7.645 7.842a1 1 0 1 1 1.984.248a9 9 0 1 1-9.572-10.101l-.815-.816a1 1 0 0 1 0-1.414m5.664 8a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 13.586l3.793-3.793a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentApprovalsApp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
