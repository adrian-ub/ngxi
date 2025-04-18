import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyAutoIcon],svg[cryptocurrency-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m8.5-12.733v-8.2L16 6l-8.5 5.067v9.955L16 26l7.015-4.108l-7.538-4.47l1.365-.755v-7.9l5.74 3.422v3.633l-1.787-1.055l-.48 1.989zM9.418 12.19l5.518-3.29v6.568l-5.518 3.2zm4.097 6.344l5.66 3.353L16 23.745l-5.623-3.293z"></svg:path>`,
})
export class CryptocurrencyAutoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
