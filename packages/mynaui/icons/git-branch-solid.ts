import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitBranchSolidIcon],svg[mynaui-git-branch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3a.75.75 0 0 0-1.5 0v11.325a3.751 3.751 0 1 0 4.43 4.402a9.75 9.75 0 0 0 9.047-9.047a3.751 3.751 0 1 0-1.504-.01a8.25 8.25 0 0 1-7.554 7.553a3.76 3.76 0 0 0-2.919-2.898z"></svg:path>`,
})
export class MynauiGitBranchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
