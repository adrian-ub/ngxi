import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTerminalIcon],svg[jam-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.243 7.071l-4.95-4.95A1 1 0 1 1 1.707.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414zM6.929 12h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamTerminalIcon {
  readonly viewBox = input("-4 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
