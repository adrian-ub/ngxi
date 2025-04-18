import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitPrDraftFillIcon],svg[ri-git-pr-draft-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM21 18a3 3 0 1 1-6 0a3 3 0 0 1 6 0M18 7.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class RiGitPrDraftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
