import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelFilledIcon],svg[bitcoin-icons-channel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a3.5 3.5 0 0 1 3.5-3.5h11a3.5 3.5 0 1 1 0 7h-11A3.5 3.5 0 0 1 3 12m3.5-2.5a2.5 2.5 0 0 0 0 5h11a2.5 2.5 0 0 0 0-5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 12a1.5 1.5 0 0 1 1.5-1.5h7v3h-7A1.5 1.5 0 0 1 5 12m9.5-1.5h3a1.5 1.5 0 0 1 0 3h-3z"></svg:path>`,
})
export class BitcoinIconsChannelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
