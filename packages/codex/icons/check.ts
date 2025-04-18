import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexCheckIcon],svg[codex-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 12l3.488 3.837a.2.2 0 0 0 .296 0L17 9"></svg:path>`,
})
export class CodexCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
