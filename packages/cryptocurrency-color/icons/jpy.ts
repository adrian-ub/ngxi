import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorJpyIcon],svg[cryptocurrency-color-jpy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#eac749"></svg:circle><svg:path fill="#fff" d="M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorJpyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
