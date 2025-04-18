import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexAlignCenterIcon],svg[codex-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7H6m12 10H6m10-5H8"></svg:path>`,
})
export class CodexAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
