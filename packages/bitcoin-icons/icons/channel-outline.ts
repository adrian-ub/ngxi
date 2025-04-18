import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelOutlineIcon],svg[bitcoin-icons-channel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="17" height="6" x="3.5" y="9" rx="3"></svg:rect><svg:path d="M5.5 12a1 1 0 0 1 1-1H13v2H6.5a1 1 0 0 1-1-1Zm9.5-1h2.5a1 1 0 1 1 0 2H15z"></svg:path></svg:g>`,
})
export class BitcoinIconsChannelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
