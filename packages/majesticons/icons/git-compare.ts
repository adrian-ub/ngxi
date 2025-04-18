import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCompareIcon],svg[majesticons-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7"></svg:path><svg:path fill="currentColor" d="M3 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v5a2 2 0 0 0 2 2h1m2 0l-2 2v-2m2 0H9m2 0l-2-2v2"></svg:path></svg:g>`,
})
export class MajesticonsGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
