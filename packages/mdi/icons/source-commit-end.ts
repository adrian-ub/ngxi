import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSourceCommitEndIcon],svg[mdi-source-commit-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 4-4.9V3h2v4.1a5 5 0 0 1 4 4.9m-5-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiSourceCommitEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
