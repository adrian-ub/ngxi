import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsDevicesOutlineIcon],svg[bitcoin-icons-devices-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="9" height="15" x="7.5" y="4.5" rx="1.5"></svg:rect><svg:rect width="5" height="5" x="9.5" y="6.5" rx=".75"></svg:rect><svg:rect width="1.5" height="1" rx=".5" transform="matrix(1 0 0 -1 9.5 14.5)"></svg:rect><svg:rect width="1.5" height="1" rx=".5" transform="matrix(1 0 0 -1 13 14.5)"></svg:rect></svg:g>`,
})
export class BitcoinIconsDevicesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
