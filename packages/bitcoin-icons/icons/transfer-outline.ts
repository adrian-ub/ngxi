import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransferOutlineIcon],svg[bitcoin-icons-transfer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 15.993V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.007m-.648-4.557l-3.047 3.198l-3.048-3.198"></svg:path><svg:path d="M6.4 13.958V8.952A4.95 4.95 0 0 1 11.352 4v0a4.95 4.95 0 0 1 4.953 4.952v5.006"></svg:path></svg:g>`,
})
export class BitcoinIconsTransferOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
