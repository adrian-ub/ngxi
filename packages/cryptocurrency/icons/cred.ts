import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyCredIcon],svg[cryptocurrency-cred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-3.864-16.034l-1.253 1.271L15.618 22L26 11.539l-1.253-1.271l-9.13 9.19zm2.11-.31l1.255 1.273l5.616-5.658L19.864 10zm-2.276 4.83L7.251 15.7L6 16.97l4.734 4.762z"></svg:path>`,
})
export class CryptocurrencyCredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
