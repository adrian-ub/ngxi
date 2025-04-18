import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitMergeQueue16Icon],svg[octicon-git-merge-queue-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M3 7.75a.75.75 0 0 1 1.5 0v2.878a2.251 2.251 0 1 1-1.5 0Zm.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m5-7.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.75 2.5a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m-1.5 0a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class OcticonGitMergeQueue16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
