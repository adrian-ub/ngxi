import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitPullRequestDraft24Icon],svg[octicon-git-pull-request-draft-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 1.5a3.25 3.25 0 0 1 .745 6.414L5.5 8v8l-.005.086A3.25 3.25 0 0 1 4.75 22.5a3.25 3.25 0 0 1-.745-6.414L4 16V8q0-.043.005-.086A3.25 3.25 0 0 1 4.75 1.5M16 19.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M3 4.75a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 4.75m0 14.5a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 3 19.25m16.25-1.75a1.75 1.75 0 1 0 .001 3.501a1.75 1.75 0 0 0-.001-3.501m0-11.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5M21 11.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path>`,
})
export class OcticonGitPullRequestDraft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
