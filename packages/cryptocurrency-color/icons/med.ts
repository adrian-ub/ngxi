import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMedIcon],svg[cryptocurrency-color-med-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#00B0FF"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="M24 12.061v8.915l-2.536 1.48v-5.95L16 19.776l-5.464-3.273v5.953L8 20.976V12.06l8 4.805zm-7.97 11.117l2.34-1.399l2.31 1.399L16.03 26l-4.648-2.822l2.31-1.399l2.339 1.399zm4.62-14.356l-2.311 1.399L16 8.822l-2.339 1.399l-2.31-1.399L16 6z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
