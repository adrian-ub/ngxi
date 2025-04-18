import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitCommitIcon],svg[tdesign-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4.9 2a5.002 5.002 0 0 1 9.8 0H23v2h-6.1a5.002 5.002 0 0 1-9.8 0H1v-2z"></svg:path>`,
})
export class TdesignGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
