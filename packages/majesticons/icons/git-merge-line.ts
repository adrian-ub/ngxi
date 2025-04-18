import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitMergeLineIcon],svg[majesticons-git-merge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v10m0-10c0 2.333 1.4 7 7 7"></svg:path><svg:circle cx="17" cy="17" r="3"></svg:circle></svg:g>`,
})
export class MajesticonsGitMergeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
