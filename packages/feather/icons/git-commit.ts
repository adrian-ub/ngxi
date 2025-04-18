import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherGitCommitIcon],svg[feather-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M1.05 12H7m10.01 0h5.95"></svg:path></svg:g>`,
})
export class FeatherGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
