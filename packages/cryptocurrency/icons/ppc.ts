import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyPpcIcon],svg[cryptocurrency-ppc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M9 7.5v9.209c0 5.05 3.75 9.433 8.883 8.626c3.015-4.42.406-11.267-6.06-15.115c8.127 3.359 9.788 9.44 8.911 14.493c-.047.266-.109.527-.169.787c1.482-1.028 2.187-2.014 2.85-3.817C25.756 15.206 21.093 7.947 9 7.5"></svg:path>`,
})
export class CryptocurrencyPpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
