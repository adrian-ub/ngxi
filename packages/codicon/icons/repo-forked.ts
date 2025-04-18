import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconRepoForkedIcon],svg[codicon-repo-forked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a2 2 0 1 0-2.47 1.94V7a.48.48 0 0 1-.27.44L8.49 8.88l-2.76-1.4A.49.49 0 0 1 5.46 7V5.94a2 2 0 1 0-1 0V7a1.51 1.51 0 0 0 .82 1.34L8 9.74v1.32a2 2 0 1 0 1 0V9.74l2.7-1.36A1.49 1.49 0 0 0 12.52 7V5.92A2 2 0 0 0 14 4M4 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5.47 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CodiconRepoForkedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
