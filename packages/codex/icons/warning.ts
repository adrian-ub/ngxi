import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexWarningIcon],svg[codex-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M12 9v3m0 3.02v-.01"></svg:path></svg:g>`,
})
export class CodexWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
