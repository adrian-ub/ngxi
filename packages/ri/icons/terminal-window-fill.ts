import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTerminalWindowFillIcon],svg[ri-terminal-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 3v2h2V6zm4 0v2h2V6zm-4 5h3v5H5z"></svg:path>`,
})
export class RiTerminalWindowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
