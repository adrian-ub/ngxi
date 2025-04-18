import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyArkIcon],svg[cryptocurrency-ark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.053-18.653L27 25L15.996 7L5 24.891zm1.588 4.585v.017l-1.662-1.953l-1.76 1.936zm-6.6 3.177h9.859l-1.998-2.045l-5.92.025v.009l-1.94 1.987z"></svg:path>`,
})
export class CryptocurrencyArkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
