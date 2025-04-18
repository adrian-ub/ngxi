import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGitPullRequestIcon],svg[tabler-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8v8"></svg:path><svg:path d="M11 6h5a2 2 0 0 1 2 2v8"></svg:path><svg:path d="m14 9l-3-3l3-3"></svg:path></svg:g>`,
})
export class TablerGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
