import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSourceCommitStartIcon],svg[mdi-source-commit-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-4 4.9V21h-2v-4.1A5 5 0 0 1 7 12a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiSourceCommitStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
