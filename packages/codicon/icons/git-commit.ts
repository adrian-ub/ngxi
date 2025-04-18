import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGitCommitIcon],svg[codicon-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0h1v4.03a4 4 0 0 1 0 7.94V16h-1v-4.03a4 4 0 0 1 0-7.94zM8 10.6a2.6 2.6 0 1 0 0-5.2a2.6 2.6 0 0 0 0 5.2"></svg:path>`,
})
export class CodiconGitCommitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
