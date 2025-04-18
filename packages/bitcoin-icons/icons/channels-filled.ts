import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsChannelsFilledIcon],svg[bitcoin-icons-channels-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8.5A1.5 1.5 0 0 1 4.5 7H13v3H4.5A1.5 1.5 0 0 1 3 8.5M14 7h5.5a1.5 1.5 0 0 1 0 3H14zM3 12.5A1.5 1.5 0 0 1 4.5 11H10v3H4.5A1.5 1.5 0 0 1 3 12.5m8-1.5h8.5a1.5 1.5 0 0 1 0 3H11zm-8 5.5A1.5 1.5 0 0 1 4.5 15H16v3H4.5A1.5 1.5 0 0 1 3 16.5M17 15h2.5a1.5 1.5 0 0 1 0 3H17z"></svg:path>`,
})
export class BitcoinIconsChannelsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
