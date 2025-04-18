import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSourceCommitIcon],svg[mdi-source-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12a5 5 0 0 1-4 4.9V21h-2v-4.1a5 5 0 0 1 0-9.8V3h2v4.1a5 5 0 0 1 4 4.9m-5-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiSourceCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
