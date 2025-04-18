import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexAlignRightIcon],svg[codex-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 7H7m12 10H7m12-5h-8"></svg:path>`,
})
export class CodexAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
