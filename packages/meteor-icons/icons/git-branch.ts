import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitBranchIcon],svg[meteor-icons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="12" r="3"></svg:circle><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M6 8v8m11-1s-2 4-8 4"></svg:path></svg:g>`,
})
export class MeteorIconsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
