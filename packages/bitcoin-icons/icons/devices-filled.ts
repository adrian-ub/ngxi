import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsDevicesFilledIcon],svg[bitcoin-icons-devices-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 4A1.5 1.5 0 0 0 7 5.5v13A1.5 1.5 0 0 0 8.5 20h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 4zm1.25 2a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zM9 14.25c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0-.75.75m4.75.75a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsDevicesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
