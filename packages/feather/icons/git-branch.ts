import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherGitBranchIcon],svg[feather-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3v12"></svg:path><svg:circle cx="18" cy="6" r="3"></svg:circle><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:path d="M18 9a9 9 0 0 1-9 9"></svg:path></svg:g>`,
})
export class FeatherGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
