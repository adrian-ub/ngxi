import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTerminalIcon],svg[icon-park-solid-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTerminal0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="m12 18l7 6l-7 6m11 2h13"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTerminal0)"></svg:path>`,
})
export class IconParkSolidTerminalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
