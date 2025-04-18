import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyXmrIcon],svg[cryptocurrency-xmr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.03-26.765A10.816 10.816 0 0 0 5.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04l7.04-7.04v9.094h3.226a11 11 0 0 0 .558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192c3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"></svg:path>`,
})
export class CryptocurrencyXmrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
