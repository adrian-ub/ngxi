import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDgdIcon],svg[cryptocurrency-color-dgd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#F4D029"></svg:circle><svg:path fill="#FFF" d="M12.5 11v3h-7v-3zm1 0h2v10h-10v-6h8zm-6 6v2h6v-2zm19-4h-8v6h6v-2h-4v-2h6v6h-10V11h10z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDgdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
