import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGitBranchIcon],svg[gg-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 0-1 3.732v10.536A2 2 0 1 0 10.732 20h1.227a4 4 0 0 0 4-4v-1.268a2 2 0 0 0-1-3.732a2 2 0 0 0-1 3.732V16a2 2 0 0 1-2 2h-1.227a2 2 0 0 0-.732-.732V6.732A2 2 0 0 0 9 3"></svg:path>`,
})
export class GgGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
