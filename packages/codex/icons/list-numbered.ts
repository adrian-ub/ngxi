import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexListNumberedIcon],svg[codex-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7h7m-7 5h7m-7 5h7M7.8 14V7.214a.1.1 0 0 0-.164-.077L4.8 9.5"></svg:path>`,
})
export class CodexListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
