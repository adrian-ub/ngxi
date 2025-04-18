import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGitCommitIcon],svg[gg-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4a1 1 0 1 1 2 0v5.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0v-5.17a3.001 3.001 0 0 1 0-5.66zm1 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
