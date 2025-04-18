import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchFork16FilledIcon],svg[fluent-branch-fork-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3.5a2.5 2.5 0 0 1-2 2.45V8h4.5A1.5 1.5 0 0 0 11 6.5v-.55a2.5 2.5 0 1 1 1 0v.55A2.5 2.5 0 0 1 9.5 9H5v1.05a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 7 3.5"></svg:path>`,
})
export class FluentBranchFork16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
