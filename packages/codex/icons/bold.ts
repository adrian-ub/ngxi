import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexBoldIcon],svg[codex-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12V7.1a.1.1 0 0 1 .1-.1h1.3c1.1 0 3.6.1 3.6 2.5c0 0 0 2.5-3 2.5m-2 0v4.8c0 .11.09.2.2.2h3.3c1.5 0 2.5-1 2.5-2.5c0-2.795-4-2.5-4-2.5m-2 0h2"></svg:path>`,
})
export class CodexBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
