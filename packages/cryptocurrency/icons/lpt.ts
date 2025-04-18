import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyLptIcon],svg[cryptocurrency-lpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-1.775-8.517v3.509h3.508v-3.509zm0-15.483v3.508h3.508V8zm8.267 0v3.508H26V8zM6 8v3.508h3.508V8zm12.358 7.742v3.508h3.509v-3.508zm-8.275 0v3.508h3.509v-3.508z"></svg:path>`,
})
export class CryptocurrencyLptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
