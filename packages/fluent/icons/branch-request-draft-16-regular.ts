import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchRequestDraft16RegularIcon],svg[fluent-branch-request-draft-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m4 0a2.5 2.5 0 0 1-2 2.45v4.1a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 6 3.5m-4 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m9 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m1-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentBranchRequestDraft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
