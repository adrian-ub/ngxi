import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH6Icon],svg[codex-h6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m7.5-2c-3 .5-3.5 3.329-3.5 5m0 0v0a2 2 0 0 0 2 2h.325c1 0 1.994-.65 1.927-1.65C20.062 12.497 16 12.662 16 15Z"></svg:path>`,
})
export class CodexH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
