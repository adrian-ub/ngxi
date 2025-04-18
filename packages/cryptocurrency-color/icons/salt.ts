import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSaltIcon],svg[cryptocurrency-color-salt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#1BEEF4"></svg:circle><svg:path fill="#FFF" d="m16.5 10.445l5.804 12.214H10.696zM16.5 5L7 25h19z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorSaltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
