import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCryptoComIcon],svg[token-branded-crypto-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M12 3.001L4.2 7.505v8.999L12 21l7.8-4.496v-9zm0 0L4.2 7.505v8.999L12 21l7.8-4.496v-9z"></svg:path><svg:path fill="#03316C" d="M15.078 17.487h-1.113l-1.321-1.221v-.625l1.371-1.307V12.25l1.796-1.171l2.047 1.544zm-4.596-3.283l.208-1.953l-.675-1.753h3.972l-.661 1.753l.187 1.953zm.905 2.061l-1.322 1.236H8.938l-2.794-4.877l2.061-1.53l1.81 1.157v2.083l1.372 1.307zM8.923 6.893h6.141l.733 3.124H8.205zM11.997 3L4.205 7.503v9l7.792 4.496l7.8-4.496v-9z"></svg:path></svg:g>`,
})
export class TokenBrandedCryptoComIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
