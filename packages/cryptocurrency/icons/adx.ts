import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyAdxIcon],svg[cryptocurrency-adx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M11.587 8.602L9 11.36l4.36 4.614L9 20.68l2.587 2.717L16 18.792l4.305 4.604L23 20.603l-4.396-4.604L23 11.36l-2.695-2.757L16 13.208zm.355-.376l2.126 2.265l1.914-2.114l1.914 2.114l2.126-2.265L15.982 4zm0 15.548L15.982 28l4.04-4.226l-2.126-2.265l-1.914 2.114l-1.914-2.114z"></svg:path>`,
})
export class CryptocurrencyAdxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
