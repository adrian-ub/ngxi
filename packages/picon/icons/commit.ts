import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCommitIcon],svg[picon-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v1h1V4m0 2v2H2V6H1V3h1V0h1v3h1v3"></svg:path>`,
})
export class PiconCommitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
