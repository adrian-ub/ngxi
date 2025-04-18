import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGitPullRequestGoToChangesIcon],svg[codicon-git-pull-request-go-to-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 10v4l1 1h9l1-1V5l-.29-.71l-3-3L10 1H8v1h2l3 3v9H4v-4zm8-4H9V4H8v2H6v1h2v2h1V7h2zm-5 5h5v1H6z"></svg:path><svg:path d="M7.06 3.854L4.915 6l-.707-.707L5.5 4h-3a1.5 1.5 0 0 0 0 3H3v1h-.5a2.5 2.5 0 1 1 0-5h3L4.207 1.707L4.914 1l2.147 2.146z"></svg:path></svg:g>`,
})
export class CodiconGitPullRequestGoToChangesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
