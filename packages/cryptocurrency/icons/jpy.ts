import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyJpyIcon],svg[cryptocurrency-jpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m1.548-13.289h5.063v-2.288h-4.197L24.5 7.5h-3.647l-4.8 7.534L11.251 7.5H7.5l6.06 8.923H9.39v2.288h5.063v1.878H9.39v2.288h5.063V25.5h3.096v-2.623h5.063V20.59h-5.063z"></svg:path>`,
})
export class CryptocurrencyJpyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
