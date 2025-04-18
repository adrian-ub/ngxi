import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorScIcon],svg[cryptocurrency-color-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#20EE82"></svg:circle><svg:path fill="#FFF" d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5v8.5H16a8.5 8.5 0 1 1 0-17m5.1 13.6v-5.023c0-2.82-2.255-5.163-5.074-5.177a5.106 5.106 0 0 0-5.126 5.126c.014 2.819 2.358 5.074 5.177 5.074z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorScIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
