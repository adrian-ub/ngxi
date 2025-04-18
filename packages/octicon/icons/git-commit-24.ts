import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitCommit24Icon],svg[octicon-git-commit-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0m-1.444.75a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0"></svg:path>`,
})
export class OcticonGitCommit24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
