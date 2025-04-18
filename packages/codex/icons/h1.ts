import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH1Icon],svg[codex-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m7 5v-6.786a.1.1 0 0 0-.164-.077L16 12.5"></svg:path>`,
})
export class CodexH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
