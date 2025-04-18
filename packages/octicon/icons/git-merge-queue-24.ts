import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitMergeQueue24Icon],svg[octicon-git-merge-queue-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 6.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 5.75 6.5M9.5 8.75a1.75 1.75 0 1 1 3.501.001A1.75 1.75 0 0 1 9.5 8.75M5.75 22.5a3.25 3.25 0 0 1-.745-6.414L5 16v-5a.75.75 0 0 1 1.5 0v5l-.005.086A3.252 3.252 0 0 1 5.75 22.5M4 19.25a1.75 1.75 0 1 0 3.501-.001A1.75 1.75 0 0 0 4 19.25m11-6.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m3.25 1.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path>`,
})
export class OcticonGitMergeQueue24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
