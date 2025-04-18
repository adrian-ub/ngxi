import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGitPullRequestClosedIcon],svg[hugeicons-git-pull-request-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 8v8m12-5v5"></svg:path><svg:circle cx="6" cy="18" r="2"></svg:circle><svg:circle cx="6" cy="6" r="2"></svg:circle><svg:circle cx="18" cy="18" r="2"></svg:circle><svg:path d="m20 4l-2 2m0 0l-2 2m2-2l2 2m-2-2l-2-2"></svg:path></svg:g>`,
})
export class HugeiconsGitPullRequestClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
