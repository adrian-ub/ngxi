import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitCompareSolidIcon],svg[teenyicons-git-compare-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 2 4.95V9.5A3.5 3.5 0 0 0 5.5 13h1.793l-1.147 1.146l.708.708L9.207 12.5l-2.353-2.354l-.708.708L7.293 12H5.5A2.5 2.5 0 0 1 3 9.5V4.95A2.5 2.5 0 0 0 2.5 0m6.354.854L8.146.146L5.793 2.5l2.353 2.354l.708-.708L7.707 3H9.5A2.5 2.5 0 0 1 12 5.5v4.55a2.5 2.5 0 1 0 1 0V5.5A3.5 3.5 0 0 0 9.5 2H7.707z"></svg:path>`,
})
export class TeenyiconsGitCompareSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
