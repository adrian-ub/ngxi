import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorArkIcon],svg[cryptocurrency-color-ark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F70000"></svg:circle><svg:path fill="#FFF" d="M15.947 13.347L5 24.89L15.996 7L27 25zm1.588 4.585h-3.422l1.76-1.936l1.662 1.953zm-6.6 3.177v-.024l1.941-1.987v-.009l5.92-.025l1.998 2.045z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorArkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
