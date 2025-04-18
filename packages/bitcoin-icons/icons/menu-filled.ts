import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMenuFilledIcon],svg[bitcoin-icons-menu-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="1.5" x="3" y="7.001" fill="currentColor" rx=".75"></svg:rect><svg:rect width="15" height="1.5" x="3" y="11.251" fill="currentColor" rx=".75"></svg:rect><svg:rect width="18" height="1.5" x="3" y="15.499" fill="currentColor" rx=".75"></svg:rect>`,
})
export class BitcoinIconsMenuFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
