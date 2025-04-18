import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitMergeIcon],svg[mynaui-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m9 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 0a9 9 0 0 1-9-9m0 0v12"></svg:path>`,
})
export class MynauiGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
