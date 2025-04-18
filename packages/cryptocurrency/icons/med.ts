import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyMedIcon],svg[cryptocurrency-med-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m8-19.939l-8 4.805l-8-4.805v8.915l2.536 1.48v-5.953L16 19.777l5.464-3.27v5.95L24 20.977zm-7.97 11.117l-2.338-1.399l-2.31 1.399L16.03 26l4.649-2.822l-2.31-1.399zm4.62-14.356L16 6l-4.65 2.822l2.311 1.399L16 8.822l2.339 1.399l2.31-1.399z"></svg:path>`,
})
export class CryptocurrencyMedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
