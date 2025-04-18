import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMiningDeviceOutlineIcon],svg[bitcoin-icons-mining-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.5 5.5h13v13h-13z"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.5 7.5l9 9m0-9l-9 9"></svg:path></svg:g>`,
})
export class BitcoinIconsMiningDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
