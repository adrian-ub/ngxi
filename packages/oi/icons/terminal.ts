import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTerminalIcon],svg[oi-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H7.9c.05 0 .09-.04.09-.09V.09C7.99.03 7.95 0 7.9 0zM1.5.78L3.22 2.5L1.5 4.22L.78 3.5l1-1l-1-1zM4 3h3v1H4z"></svg:path>`,
})
export class OiTerminalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
