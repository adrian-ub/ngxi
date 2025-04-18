import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitForkLineIcon],svg[ri-git-fork-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m15-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiGitForkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
