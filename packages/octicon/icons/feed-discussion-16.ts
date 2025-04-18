import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedDiscussion16Icon],svg[octicon-feed-discussion-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M4 5v5a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 .854.354L8.707 11H11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1"></svg:path>`,
})
export class OcticonFeedDiscussion16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
