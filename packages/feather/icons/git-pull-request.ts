import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherGitPullRequestIcon],svg[feather-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:circle cx="6" cy="6" r="3"></svg:circle><svg:path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"></svg:path></svg:g>`,
})
export class FeatherGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
