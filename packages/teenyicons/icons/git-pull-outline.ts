import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitPullOutlineIcon],svg[teenyicons-git-pull-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8.5.5l-2 2m0 0l2 2m-2-2h3a3 3 0 0 1 3 3v2m-10 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 0v-6m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></svg:path>`,
})
export class TeenyiconsGitPullOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
