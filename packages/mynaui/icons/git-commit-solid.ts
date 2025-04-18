import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitCommitSolidIcon],svg[mynaui-git-commit-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.25a3.75 3.75 0 0 0-3.675 3H3a.75.75 0 0 0 0 1.5h5.325a3.751 3.751 0 0 0 7.35 0H21a.75.75 0 0 0 0-1.5h-5.325a3.75 3.75 0 0 0-3.675-3"></svg:path>`,
})
export class MynauiGitCommitSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
