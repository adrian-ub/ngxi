import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTerminalWindowLineIcon],svg[ri-terminal-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V5H4v4zm0 2H4v8h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 9h3v5H5zm0-6h2v2H5zm4 0h2v2H9z"></svg:path>`,
})
export class RiTerminalWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
