import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexStrikethroughIcon],svg[codex-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.5c-1-1.5-3.565-1.835-4.747-.703A2.4 2.4 0 0 0 9 9.54c0 .654.27 1.28.753 1.742c1.23 1.179 3.264.265 4.494 1.443c.482.463.753 1.09.753 1.742c0 .654-.27 1.28-.753 1.743C12.866 17.532 10 17.5 9 16m-3-4h12"></svg:path>`,
})
export class CodexStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
