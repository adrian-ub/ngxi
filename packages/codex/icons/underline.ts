import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexUnderlineIcon],svg[codex-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5v4a3 3 0 0 0 6 0v-4M7.714 18h8.572"></svg:path>`,
})
export class CodexUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
