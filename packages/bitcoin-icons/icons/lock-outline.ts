import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsLockOutlineIcon],svg[bitcoin-icons-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="14" height="10" x="5" y="10.968" rx="2"></svg:rect><svg:path d="M15.486 10.984V7.243a1.5 1.5 0 0 0-1.5-1.5h-3.972a1.5 1.5 0 0 0-1.5 1.5v3.74"></svg:path></svg:g>`,
})
export class BitcoinIconsLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
