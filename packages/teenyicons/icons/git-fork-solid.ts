import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitForkSolidIcon],svg[teenyicons-git-fork-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95v5.1a2.5 2.5 0 1 0 1 0V9h6.5A3.5 3.5 0 0 0 13 5.5v-.55a2.5 2.5 0 1 0-1 0v.55A2.5 2.5 0 0 1 9.5 8H3V4.95A2.5 2.5 0 0 0 2.5 0"></svg:path>`,
})
export class TeenyiconsGitForkSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
