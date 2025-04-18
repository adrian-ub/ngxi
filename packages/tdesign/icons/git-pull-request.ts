import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitPullRequestIcon],svg[tdesign-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.414 3l-2 2H19.5v9.645a3.501 3.501 0 0 1-1 6.855a3.5 3.5 0 0 1-1-6.855V7h-3.086l2 2L15 10.414L10.586 6L15 1.586zM5.5 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2 6a3.5 3.5 0 1 1 4.5 3.355v5.29a3.501 3.501 0 0 1-1 6.855a3.5 3.5 0 0 1-1-6.855v-5.29A3.5 3.5 0 0 1 2 6m3.5 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
