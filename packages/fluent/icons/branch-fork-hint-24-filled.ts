import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchForkHint24FilledIcon],svg[fluent-branch-fork-hint-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2a3.5 3.5 0 0 0-1 6.855v5.395a.75.75 0 0 0 1.5 0V13h6.25A3.75 3.75 0 0 0 17 9.25v-.285a3.5 3.5 0 1 0-1.5-.11v.395a2.25 2.25 0 0 1-2.25 2.25H7V8.965A3.5 3.5 0 0 0 6.5 2M5.341 16.885a.75.75 0 0 0-.872-1.22a3.53 3.53 0 0 0-1.231 1.587a.75.75 0 1 0 1.4.54a2 2 0 0 1 .703-.908m3.19-1.22a.75.75 0 0 0-.872 1.22a2 2 0 0 1 .704.906a.75.75 0 1 0 1.4-.539a3.5 3.5 0 0 0-1.232-1.588m-3.754 3.854a.75.75 0 1 0-1.294.759a3.5 3.5 0 0 0 1.474 1.37a.75.75 0 0 0 .662-1.346a2 2 0 0 1-.842-.783m4.74.759a.75.75 0 0 0-1.294-.759a2 2 0 0 1-.842.783a.75.75 0 0 0 .662 1.346a3.5 3.5 0 0 0 1.474-1.37"></svg:path>`,
})
export class FluentBranchForkHint24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
