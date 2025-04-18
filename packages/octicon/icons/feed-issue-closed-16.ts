import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedIssueClosed16Icon],svg[octicon-feed-issue-closed-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m3.457 6.957a.999.999 0 1 0-1.414-1.414L7.25 8.336L5.957 7.043a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0Z"></svg:path>`,
})
export class OcticonFeedIssueClosed16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
