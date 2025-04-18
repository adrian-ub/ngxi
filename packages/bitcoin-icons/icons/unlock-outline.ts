import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUnlockOutlineIcon],svg[bitcoin-icons-unlock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="14" height="10" x="5" y="10.989" rx="2"></svg:rect><svg:path stroke-linecap="round" d="m15.5 8l-.008-1.742a1.5 1.5 0 0 0-1.5-1.494h-3.978a1.5 1.5 0 0 0-1.5 1.5v4.73"></svg:path></svg:g>`,
})
export class BitcoinIconsUnlockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
