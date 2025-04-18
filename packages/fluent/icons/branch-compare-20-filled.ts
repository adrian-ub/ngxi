import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchCompare20FilledIcon],svg[fluent-branch-compare-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.146 6.854a.5.5 0 0 0 .708-.708L10.707 5H12.5A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM5 8a3 3 0 1 0-1-.17v4.67A3.5 3.5 0 0 0 7.5 16h1.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 .146-.351v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L9.293 15H7.5A2.5 2.5 0 0 1 5 12.5z"></svg:path>`,
})
export class FluentBranchCompare20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
