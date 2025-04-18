import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSourceCommitStartNextLocalIcon],svg[mdi-source-commit-start-next-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m-1 12v-2h2v2z"></svg:path>`,
})
export class MdiSourceCommitStartNextLocalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
