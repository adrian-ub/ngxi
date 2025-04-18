import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyDgdIcon],svg[cryptocurrency-dgd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M5.5 11v10h10V11zm7 3v-3h1v4h-8v-1zm-5 3h6v2h-6zm19-4v-2h-10v10h10v-6h-6v2h4v2h-6v-6z"></svg:path>`,
})
export class CryptocurrencyDgdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
