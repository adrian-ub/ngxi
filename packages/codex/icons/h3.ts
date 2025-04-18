import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH3Icon],svg[codex-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4-1c0-.5.832-1 1.6-1s1.9.311 1.9 1.5a1.535 1.535 0 0 1-.952 1.482c-.01.004-.008.023.002.024c.261.04 1.45.3 1.45 1.794c0 1.2-.5 2.2-2.2 2.2c0 0-1.8 0-1.8-.7"></svg:path>`,
})
export class CodexH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
