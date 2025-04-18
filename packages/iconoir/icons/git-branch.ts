import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGitBranchIcon],svg[iconoir-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-4V3"></svg:path><svg:path d="M8 18h1c3.5 0 9-2.1 9-8.5V8"></svg:path></svg:g>`,
})
export class IconoirGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
