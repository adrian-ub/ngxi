import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXvgIcon],svg[cryptocurrency-color-xvg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#00CBFF"></svg:circle><svg:path fill="#FFF" d="M9.61 10.335L8 7h16l-1.592 3.335H24L15.951 27L8 10.335zm0 0l6.438 13.33l6.36-13.33H9.611z"></svg:path><svg:path fill="#FFF" d="M16 24.5L8 7h15.999z" opacity=".504"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXvgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
