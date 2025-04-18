import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchCompare24RegularIcon],svg[fluent-branch-compare-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5.5a3.5 3.5 0 0 1-3 3.465V15a3 3 0 0 0 3 3h2.69l-.97-.97a.75.75 0 1 1 1.06-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H9A4.5 4.5 0 0 1 4.5 15V8.855A3.502 3.502 0 0 1 5.5 2A3.5 3.5 0 0 1 9 5.5m-1.5 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14.5 13a3.5 3.5 0 1 1-4-3.465V9a3 3 0 0 0-3-3h-1.94l.97.97a.75.75 0 0 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 1 1 1.06 1.06l-.97.97H15A4.5 4.5 0 0 1 19.5 9v6.145c1.446.43 2.5 1.77 2.5 3.355m-1.5 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class FluentBranchCompare24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
