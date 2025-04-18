import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchRequest20FilledIcon],svg[fluent-branch-request-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a3 3 0 0 1-2.5 2.959v4.082a3 3 0 1 1-1 0V7.96A3 3 0 1 1 8 5m3.854 1.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L10.707 4H12.5A3.5 3.5 0 0 1 16 7.5v4.67a3.001 3.001 0 1 1-1-.17V7.5A2.5 2.5 0 0 0 12.5 5h-1.793l1.147 1.146a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentBranchRequest20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
