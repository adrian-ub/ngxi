import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitCommitIcon],svg[charm-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="2.25"></svg:circle><svg:path d="M8 10.75v3.5m0-12.5v3.5"></svg:path></svg:g>`,
})
export class CharmGitCommitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
