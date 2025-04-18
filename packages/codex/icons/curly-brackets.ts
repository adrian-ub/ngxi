import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexCurlyBracketsIcon],svg[codex-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17c-2 0-2-1.746-2-3.5L5.5 12L7 10.5C7 8.746 7 7 9 7m6 10c2 0 2-1.746 2-3.5l1.5-1.5l-1.5-1.5C17 8.746 17 7 15 7"></svg:path>`,
})
export class CodexCurlyBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
