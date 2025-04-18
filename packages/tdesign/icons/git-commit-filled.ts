import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitCommitFilledIcon],svg[tdesign-git-commit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.1 11a5.002 5.002 0 0 1 9.8 0H23v2h-6.1a5.002 5.002 0 0 1-9.8 0H1v-2z"></svg:path>`,
})
export class TdesignGitCommitFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
