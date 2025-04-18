import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinTerminalIcon],svg[vaadin-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h9v1H6zm-4.9 1h1.2L6 8L2.3 3H1l3.8 5z"></svg:path>`,
})
export class VaadinTerminalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
