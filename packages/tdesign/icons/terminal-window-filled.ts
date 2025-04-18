import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalWindowFilledIcon],svg[tdesign-terminal-window-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8V3H1v5zm0 1.998H1V21h22zM5 18v-5h2v5z"></svg:path>`,
})
export class TdesignTerminalWindowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
