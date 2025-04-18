import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPantheonFilledIcon],svg[bitcoin-icons-pantheon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 8H4.01A.01.01 0 0 1 4 7.99V6.507a.01.01 0 0 1 .007-.01l7.99-2.496h.006l7.99 2.497a.01.01 0 0 1 .007.01V7.99a.01.01 0 0 1-.01.01M4 20h16v-2H4zm2-3h2V9H6zm10 0h2V9h-2zm-5 0h2V9h-2z"></svg:path>`,
})
export class BitcoinIconsPantheonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
