import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGitPullRequestIcon],svg[iconoir-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7v10m12 0V7s0-2-2-2h-3"></svg:path><svg:path d="M15 7.5L12.5 5L15 2.5"></svg:path></svg:g>`,
})
export class IconoirGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
