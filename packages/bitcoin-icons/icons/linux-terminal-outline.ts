import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLinuxTerminalOutlineIcon],svg[bitcoin-icons-linux-terminal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M10 19h10.5"></svg:path><svg:path d="M6.605 17.25V19m0-13.75V7"></svg:path><svg:path stroke-linejoin="round" d="M9.686 8.923c-.2-.885-1.343-1.871-3.015-1.871c-1.671 0-2.957 1.086-2.957 2.457c0 3.114 6.2 1.514 6.2 5.129c0 1.306-1.571 2.414-3.243 2.414c-1.67 0-2.828-1.029-3.171-2.129"></svg:path></svg:g>`,
})
export class BitcoinIconsLinuxTerminalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
