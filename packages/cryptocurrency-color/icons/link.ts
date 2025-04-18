import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLinkIcon],svg[cryptocurrency-color-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#2A5ADA"></svg:circle><svg:path fill="#FFF" d="m16 6l-1.799 1.055L9.3 9.945L7.5 11v10l1.799 1.055l4.947 2.89L16.045 26l1.799-1.055l4.857-2.89L24.5 21V11l-1.799-1.055l-4.902-2.89zm-4.902 12.89v-5.78L16 10.22l4.902 2.89v5.78L16 21.78z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
