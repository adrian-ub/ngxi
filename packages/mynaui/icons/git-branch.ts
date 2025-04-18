import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitBranchIcon],svg[mynaui-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 15a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path><svg:path d="M18 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 0a9 9 0 0 1-9 9m-3-3V3"></svg:path></svg:g>`,
})
export class MynauiGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
