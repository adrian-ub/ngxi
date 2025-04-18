import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelsOutlineIcon],svg[bitcoin-icons-channels-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 8.5a1 1 0 0 1 1-1h8v2h-8a1 1 0 0 1-1-1Zm11-1h5a1 1 0 1 1 0 2h-5zm-11 5a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1Zm8-1h8a1 1 0 1 1 0 2h-8zm-8 5a1 1 0 0 1 1-1h11v2h-11a1 1 0 0 1-1-1Zm14-1h2a1 1 0 1 1 0 2h-2z"></svg:path>`,
})
export class BitcoinIconsChannelsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
