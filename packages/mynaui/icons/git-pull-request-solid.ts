import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitPullRequestSolidIcon],svg[mynaui-git-pull-request-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6a3.75 3.75 0 1 1 4.5 3.675V21a.75.75 0 0 1-1.5 0V9.675A3.75 3.75 0 0 1 2.25 6m12.78-3.53a.75.75 0 0 1 0 1.06l-1.22 1.22H16a2.75 2.75 0 0 1 2.75 2.75v6.825A3.751 3.751 0 0 1 18 21.75a3.75 3.75 0 0 1-.75-7.425V7.5c0-.69-.56-1.25-1.25-1.25h-2.19l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiGitPullRequestSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
