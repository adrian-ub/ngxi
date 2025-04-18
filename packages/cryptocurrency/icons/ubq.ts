import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyUbqIcon],svg[cryptocurrency-ubq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m13.503 15.844l3.318-2.01V5L6.008 11.278v9.103l7.777 4.068zm4.994.275l-3.318 2.012V27l10.813-6.321v-9.103l-7.777-4.068zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16"></svg:path><svg:path fill-opacity=".305" fill-rule="nonzero" d="m18.215 7.508l7.777 4.068l-7.493 4.593zm-4.43 16.941l-7.777-4.068l7.493-4.594z"></svg:path></svg:g>`,
})
export class CryptocurrencyUbqIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
