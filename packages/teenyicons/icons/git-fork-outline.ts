import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitForkOutlineIcon],svg[teenyicons-git-fork-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 4.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 0v6m0 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm10-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 0v1a3 3 0 0 1-3 3h-7"></svg:path>`,
})
export class TeenyiconsGitForkOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
