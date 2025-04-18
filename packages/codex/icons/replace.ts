import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexReplaceIcon],svg[codex-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11m0 0v4.5M5 11h4.5m3-4.5L19 13m0 0V8.5m0 4.5h-4.5"></svg:path>`,
})
export class CodexReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
