import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLptIcon],svg[cryptocurrency-color-lpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="M14.225 23.483h3.508v3.508h-3.508zm0-15.483h3.508v3.508h-3.508zm8.267 0H26v3.508h-3.508zM6 8h3.508v3.508H6zm12.358 7.742h3.508v3.508h-3.508zm-8.275 0h3.508v3.508h-3.508z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
