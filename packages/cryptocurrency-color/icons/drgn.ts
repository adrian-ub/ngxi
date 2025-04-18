import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDrgnIcon],svg[cryptocurrency-color-drgn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#C91111"></svg:circle><svg:g fill="#FFF"><svg:path d="M9.4 20.78h2.818l-.072-7.327L22.64 26.776l-.033-15.732h-2.774l.072 7.401L9.404 5.087z" opacity=".6"></svg:path><svg:path d="m9.4 9.953l.016-4.851l13.183 16.752l.055 4.942z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorDrgnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
