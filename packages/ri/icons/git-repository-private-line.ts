import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryPrivateLineIcon],svg[ri-git-repository-private-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v10h13V10zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-9 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"></svg:path>`,
})
export class RiGitRepositoryPrivateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
