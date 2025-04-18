import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorOstIcon],svg[cryptocurrency-color-ost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cryptocurrencyColorOst0" d="m15.937 10.222l2.01-3.136a2.03 2.03 0 0 0 .83-3.97a2.03 2.03 0 0 0-2.04 3.2l-2.494 3.891a7.96 7.96 0 0 0-7.142 8.707a7.965 7.965 0 0 0 8.706 7.142a7.965 7.965 0 0 0 7.143-8.706a7.97 7.97 0 0 0-7.013-7.128m-.915 12.122a4.22 4.22 0 0 1-4.224-4.223a4.22 4.22 0 0 1 4.224-4.224a4.22 4.22 0 0 1 3.95 2.732a2.44 2.44 0 0 0-3.424-.433a2.44 2.44 0 0 0-.433 3.424a2.44 2.44 0 0 0 3.849.007a4.21 4.21 0 0 1-3.942 2.717"></svg:path></svg:defs><svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#34445B"></svg:circle><svg:g fill="#FFF"><svg:use href="#cryptocurrencyColorOst0"></svg:use><svg:use href="#cryptocurrencyColorOst0"></svg:use></svg:g></svg:g>`,
})
export class CryptocurrencyColorOstIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
