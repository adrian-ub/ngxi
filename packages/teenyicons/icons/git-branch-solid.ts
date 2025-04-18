import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitBranchSolidIcon],svg[teenyicons-git-branch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1A2.5 2.5 0 1 0 4.95 13H9.5A3.5 3.5 0 0 0 13 9.5V7.95a2.5 2.5 0 1 0-1 0V9.5A2.5 2.5 0 0 1 9.5 12H4.95A2.5 2.5 0 0 0 3 10.05v-5.1A2.5 2.5 0 0 0 2.5 0"></svg:path>`,
})
export class TeenyiconsGitBranchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
