import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexBracketsIcon],svg[codex-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 8l-4 4l4 4m6-8l4 4l-4 4"></svg:path>`,
})
export class CodexBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
