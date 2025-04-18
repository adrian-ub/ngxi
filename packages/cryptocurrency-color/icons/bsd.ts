import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBsdIcon],svg[cryptocurrency-color-bsd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000"></svg:circle><svg:path fill="#FFF" d="M28 15.127H4l13.964-4.69L19.927 4zM4.11 16.655h23.78l-13.963 4.581l-1.963 6.655z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBsdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
