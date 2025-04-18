import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGitPullRequestNewChangesIcon],svg[codicon-git-pull-request-new-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m13.71 4.29l-3-3L10 1H4L3 2v12l1 1h5.354a4 4 0 0 1-.819-1H4V2h6l3 3v3.126q.534.138 1 .41V5zM8.126 11H6v1h2q.002-.519.126-1M6 6h2V4h1v2h2v1H9v2H8V7H6z" clip-rule="evenodd"></svg:path><svg:path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CodiconGitPullRequestNewChangesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
