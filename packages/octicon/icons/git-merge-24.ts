import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGitMerge24Icon],svg[octicon-git-merge-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-12.5 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m0-14.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5.75 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 6.5m0 14.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 5.75 21m12.5-6a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 18.25 15"></svg:path><svg:path fill="currentColor" d="M6.5 7.25c0 2.9 2.35 5.25 5.25 5.25h4.5V14h-4.5A6.75 6.75 0 0 1 5 7.25Z"></svg:path><svg:path fill="currentColor" d="M5.75 16.75A.75.75 0 0 1 5 16V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class OcticonGitMerge24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
