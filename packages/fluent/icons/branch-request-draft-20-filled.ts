import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchRequestDraft20FilledIcon],svg[fluent-branch-request-draft-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM18 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1.75-6.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M15 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class FluentBranchRequestDraft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
