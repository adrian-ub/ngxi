import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTerminalWindowIcon],svg[tdesign-terminal-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM3 10h18v9H3zm0-2V5h18v3zm4 9H5v-5h2z"></svg:path>`,
})
export class TdesignTerminalWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
