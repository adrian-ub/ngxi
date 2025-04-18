import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexItalicIcon],svg[codex-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10c-.918 2.734-2.34 7-2.34 7m3.21-10h-.01"></svg:path>`,
})
export class CodexItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
