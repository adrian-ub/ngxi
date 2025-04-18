import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexChevronUpIcon],svg[codex-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 15l4.859-4.859a.2.2 0 0 1 .282 0L17 15"></svg:path>`,
})
export class CodexChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
