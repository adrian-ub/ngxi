import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexChevronDownIcon],svg[codex-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 10l4.859 4.859a.2.2 0 0 0 .282 0L17 10"></svg:path>`,
})
export class CodexChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
