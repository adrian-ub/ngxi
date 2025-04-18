import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCommitLineIcon],svg[majesticons-git-commit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16a4 4 0 0 1 0-8m0 8a4 4 0 0 0 0-8m0 8v5m0-13V3"></svg:path>`,
})
export class MajesticonsGitCommitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
