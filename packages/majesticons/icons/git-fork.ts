import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitForkIcon],svg[majesticons-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="6" cy="6" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18" cy="6" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12" cy="18" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M6 9v1a2 2 0 0 0 2 2h4m6-3v1a2 2 0 0 1-2 2h-4m0 0v3"></svg:path></svg:g>`,
})
export class MajesticonsGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
