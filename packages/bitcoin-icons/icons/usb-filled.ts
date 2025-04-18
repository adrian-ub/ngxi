import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUsbFilledIcon],svg[bitcoin-icons-usb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7h9v9.5a4.5 4.5 0 1 1-9 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9 3h6v5H9zm1 1v3h4V4z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsUsbFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
