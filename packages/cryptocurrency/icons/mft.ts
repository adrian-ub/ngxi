import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyMftIcon],svg[cryptocurrency-mft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m4.985-12.832a3.026 3.026 0 1 1 0-6.052a3.026 3.026 0 0 1 0 6.052m0-10.005a6.96 6.96 0 0 0-5.003 2.115a6.95 6.95 0 0 1 1.977 4.864a6.96 6.96 0 0 1-1.977 4.864a6.98 6.98 0 1 0 5.003-11.844zM10.98 19.168a3.026 3.026 0 1 1 0-6.052a3.026 3.026 0 0 1 0 6.052m5.003-7.89a6.98 6.98 0 1 0 0 9.728a6.96 6.96 0 0 1-1.976-4.864c0-1.892.754-3.607 1.976-4.864m-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.95 6.95 0 0 0 1.976-4.864a6.95 6.95 0 0 0-1.976-4.864a6.95 6.95 0 0 0-1.977 4.864"></svg:path>`,
})
export class CryptocurrencyMftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
