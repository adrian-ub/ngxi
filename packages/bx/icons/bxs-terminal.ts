import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsTerminalIcon],svg[bx-bxs-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6.414 15.707L5 14.293L7.293 12L5 9.707l1.414-1.414L10.121 12l-3.707 3.707zM19 16h-7v-2h7v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
