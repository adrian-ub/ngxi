import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFeedPullRequestDraft16Icon],svg[octicon-feed-pull-request-draft-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.25 2.5c0-.793-.527-1.462-1.25-1.678V6.928A1.752 1.752 0 0 0 5.5 3.5A1.75 1.75 0 0 0 5 6.928v1.894a1.752 1.752 0 0 0 .5 3.428a1.75 1.75 0 0 0 1.75-1.75m3.25 1.75a1.75 1.75 0 1 0 .001-3.499a1.75 1.75 0 0 0-.001 3.499m0-4.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m.75-3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class OcticonFeedPullRequestDraft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
