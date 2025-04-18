import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCommitSolidIcon],svg[teenyicons-git-commit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5a3.5 3.5 0 0 1 3-3.465V0h1v4.035a3.5 3.5 0 0 1 0 6.93V15H7v-4.035A3.5 3.5 0 0 1 4 7.5"></svg:path>`,
})
export class TeenyiconsGitCommitSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
