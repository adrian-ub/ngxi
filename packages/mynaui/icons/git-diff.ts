import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitDiffIcon],svg[mynaui-git-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-6V7.5a2 2 0 0 0-2-2h-2.5"></svg:path><svg:path d="M14.5 8L12 5.5L14.5 3M6 3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 6v7.5a2 2 0 0 0 2 2h2.5"></svg:path><svg:path d="m9.5 16l2.5 2.5L9.5 21"></svg:path></svg:g>`,
})
export class MynauiGitDiffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
