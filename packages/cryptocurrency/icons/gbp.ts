import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyGbpIcon],svg[cryptocurrency-gbp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-4.913-17.185H9v2.637h2.087v4.462L9 22.523V24.5h13.947v-2.713h-8.585v-4.335h6.578v-2.637h-6.578V12.56c0-1.952 1.057-3.169 2.827-3.169c1.479 0 2.377.685 3.328 1.85L23 9.34c-1.268-1.598-2.906-2.84-5.838-2.84c-3.856 0-6.075 2.307-6.075 5.983z"></svg:path>`,
})
export class CryptocurrencyGbpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
