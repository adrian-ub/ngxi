import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsQrCodeOutlineIcon],svg[bitcoin-icons-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 15H9v3.5H5.5zM15 5.5h3.5V9H15zm-9.5 0H9V9H5.5zm6.25 0h.5V6h-.5zm0 3.125h.5v.5h-.5zM8.625 11.75h.5v.5h-.5zm3.125 3.125h.5v.5h-.5zm0 3.125h.5v.5h-.5zM5.5 11.75H6v.5h-.5zm6.25 0h.5v.5h-.5zm3.125 0h.5v.5h-.5zm3.125 0h.5v.5H18zm-3.125 3.125h.5v.5h-.5zm3.125 0h.5v.5H18zM14.875 18h.5v.5h-.5zM18 18h.5v.5H18z"></svg:path>`,
})
export class BitcoinIconsQrCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
