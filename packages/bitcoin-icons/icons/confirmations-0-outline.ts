import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations0OutlineIcon],svg[bitcoin-icons-confirmations-0-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M13.507 4.908a7.25 7.25 0 0 1 3.88 2.24m1.508 2.612a7.25 7.25 0 0 1 0 4.48m-1.507 2.611a7.25 7.25 0 0 1-3.88 2.24m-3.015.001a7.25 7.25 0 0 1-3.88-2.24M5.105 14.24a7.25 7.25 0 0 1 0-4.48m1.507-2.611a7.25 7.25 0 0 1 3.88-2.24"></svg:path>`,
})
export class BitcoinIconsConfirmations0OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
