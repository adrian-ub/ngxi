import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH4Icon],svg[codex-h4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m6-2l-2.717 4.851a.1.1 0 0 0 .087.149h4.83M19 17v-3.4"></svg:path>`,
})
export class CodexH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
