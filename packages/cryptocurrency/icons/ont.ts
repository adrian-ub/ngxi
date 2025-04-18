import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyOntIcon],svg[cryptocurrency-ont-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m9-7.783V15.61C25 10.854 21.06 7 16.2 7c-2.43 0-4.63.964-6.223 2.521zM7 7.783v8.608C7 21.146 10.94 25 15.8 25c2.43 0 4.63-.964 6.223-2.521z"></svg:path>`,
})
export class CryptocurrencyOntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
