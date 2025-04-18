import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCommitHorizontalIcon],svg[gravity-ui-code-commit-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 7.25h-2.32a4.001 4.001 0 0 0-7.86 0H1.75a.75.75 0 0 0 0 1.5h2.32a4.001 4.001 0 0 0 7.86 0h2.32a.75.75 0 0 0 0-1.5M5.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeCommitHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
