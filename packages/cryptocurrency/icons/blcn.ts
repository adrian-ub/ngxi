import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyBlcnIcon],svg[cryptocurrency-blcn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M7.9 7a.9.9 0 0 0-.9.9v6.2a.9.9 0 0 0 .9.9h6.2a.9.9 0 0 0 .9-.9V7.9a.9.9 0 0 0-.9-.9zm10 0a.9.9 0 0 0-.9.9v6.2a.9.9 0 0 0 .9.9h6.2a.9.9 0 0 0 .9-.9V7.9a.9.9 0 0 0-.9-.9zm0 10a.9.9 0 0 0-.9.9v6.2a.9.9 0 0 0 .9.9h6.2a.9.9 0 0 0 .9-.9v-6.2a.9.9 0 0 0-.9-.9zm-10 0a.9.9 0 0 0-.9.9v6.2a.9.9 0 0 0 .9.9h6.2a.9.9 0 0 0 .9-.9v-6.2a.9.9 0 0 0-.9-.9z"></svg:path>`,
})
export class CryptocurrencyBlcnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
