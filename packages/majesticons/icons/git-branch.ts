import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitBranchIcon],svg[majesticons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 21v-6m0-6v6m0 0h8a2 2 0 0 0 2-2v-2"></svg:path><svg:circle cx="7" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="17" cy="8" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class MajesticonsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
