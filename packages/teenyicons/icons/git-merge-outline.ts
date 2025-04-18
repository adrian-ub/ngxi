import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitMergeOutlineIcon],svg[teenyicons-git-merge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 10.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 0v-6m2-2a2 2 0 1 0-2 2m2-2a2 2 0 0 1-2 2m2-2h5a3 3 0 0 1 3 3v2m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class TeenyiconsGitMergeOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
