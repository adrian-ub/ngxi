import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitSolidIcon],svg[teenyicons-git-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.44.854a1.5 1.5 0 0 1 2.12 0l5.586 5.585a1.5 1.5 0 0 1 0 2.122l-5.585 5.585a1.5 1.5 0 0 1-2.122 0L.854 8.561a1.5 1.5 0 0 1 0-2.122L4.793 2.5l1.353 1.353A1.5 1.5 0 0 0 7 5.914v3.171a1.5 1.5 0 1 0 1 0v-3.17q.076-.027.147-.061l1 1a1.5 1.5 0 1 0 .707-.707l-1-1a1.5 1.5 0 0 0-2-2L5.5 1.792z"></svg:path>`,
})
export class TeenyiconsGitSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
