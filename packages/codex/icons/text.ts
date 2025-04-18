import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexTextIcon],svg[codex-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2c0-.11.09-.2.2-.2H12m4 2V7.2a.2.2 0 0 0-.2-.2H12m0 0v10m0 0h-2m2 0h2"></svg:path>`,
})
export class CodexTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
