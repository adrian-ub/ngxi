import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyLtcIcon],svg[cryptocurrency-ltc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483l1.427-.571l.68-2.75l-1.41.571L18.342 8h-5.129l-2.081 8.429l-1.444.58L9 19.768z"></svg:path>`,
})
export class CryptocurrencyLtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
