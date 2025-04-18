import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMnemonicOutlineIcon],svg[bitcoin-icons-mnemonic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="13" height="13" x="5.5" y="5.5" rx="1"></svg:rect><svg:path stroke-linecap="round" d="M15 16h1.5m-5 0H13m-5 0h1.5m5.5-2.667h1.5m-5 0H13m-5 0h1.5m5.5-2.666h1.5m-5 0H13m-5 0h1.5M15 8h1.5m-5 0H13M8 8h1.5"></svg:path></svg:g>`,
})
export class BitcoinIconsMnemonicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
