import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTerminalIcon],svg[icomoon-free-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1v14h16V1zm15 13H1V2h14zM14 3H2v10h12zM7 8H6v1H5v1H4V9h1V8h1V7H5V6H4V5h1v1h1v1h1zm4 2H8V9h3z"></svg:path>`,
})
export class IcomoonFreeTerminalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
