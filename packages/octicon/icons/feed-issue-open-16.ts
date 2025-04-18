import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedIssueOpen16Icon],svg[octicon-feed-issue-open-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 8a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0M9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8"></svg:path><svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-5.75a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 1 0 0-11.5"></svg:path>`,
})
export class OcticonFeedIssueOpen16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
