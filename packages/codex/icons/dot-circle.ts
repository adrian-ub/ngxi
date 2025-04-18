import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexDotCircleIcon],svg[codex-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"></svg:circle>`,
})
export class CodexDotCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
