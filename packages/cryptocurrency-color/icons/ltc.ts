import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLtcIcon],svg[cryptocurrency-color-ltc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#BFBBBB"></svg:circle><svg:path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759l1.444-.58L13.213 8h5.129l-1.519 6.196l1.41-.571l-.68 2.75l-1.427.571l-.848 3.483H23L22.127 24H9.252z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLtcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
