import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSignOutlineIcon],svg[bitcoin-icons-sign-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 16.5s.501-2.5 1-2.5s1.07 2.5 1.5 2.5s.535-1 1-1s.564 1 1 1s1.5-1 1.5-1M9 7.04h6M9 9.25h6M9 11.5h6"></svg:path><svg:rect width="11" height="15" x="6.5" y="4.5" rx="1.5"></svg:rect></svg:g>`,
})
export class BitcoinIconsSignOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
