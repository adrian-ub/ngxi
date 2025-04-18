import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitCommitLineIcon],svg[ri-git-commit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiGitCommitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
