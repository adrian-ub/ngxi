import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitCommitIcon],svg[octicon-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3c-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3c1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2c0-1.22.98-2.2 2.2-2.2c1.22 0 2.2.98 2.2 2.2c0 1.22-.98 2.2-2.2 2.2z" fill="currentColor"></svg:path>`,
})
export class OcticonGitCommitIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
