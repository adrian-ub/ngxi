import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchFork16RegularIcon],svg[fluent-branch-fork-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1 0V9h4.5A2.5 2.5 0 0 0 12 6.5v-.55a2.5 2.5 0 1 0-1 0v.55A1.5 1.5 0 0 1 9.5 8H5zM4.5 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m7 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M6 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentBranchFork16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
