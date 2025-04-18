import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCommitIcon],svg[majesticons-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16a4 4 0 0 1 0-8m0 8a4 4 0 0 0 0-8m0 8v5m0-13V3"></svg:path></svg:g>`,
})
export class MajesticonsGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
