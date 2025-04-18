import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitPrDraftLineIcon],svg[ri-git-pr-draft-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 0 0 6 3M5 18a1 1 0 1 1 2 0a1 1 0 0 1-2 0m13-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiGitPrDraftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
