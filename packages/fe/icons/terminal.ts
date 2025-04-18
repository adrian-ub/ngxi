import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTerminalIcon],svg[fe-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v12h16V6zm8 8h6v2h-6zm-1.015-2.429L7.45 15.107l-1.414-1.415l2.12-2.12l-2.12-2.122L7.45 8.036z"></svg:path>`,
})
export class FeTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
