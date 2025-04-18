import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryCommitsFillIcon],svg[ri-git-repository-commits-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17v6h-2v-6H9l4-5l4 5zm2 2h3v-3h-.8L13 9.5L7.647 16H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4zM7 5v2h2V5zm0 3v2h2V8z"></svg:path>`,
})
export class RiGitRepositoryCommitsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
