import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsAddressBookOutlineIcon],svg[bitcoin-icons-address-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M8 20.5h9.5a1 1 0 0 0 1-1V6"></svg:path><svg:path d="M5 4.075A1.07 1.07 0 0 1 6.066 3h9.444a1.07 1.07 0 0 1 1.066 1.075v13.41a1.07 1.07 0 0 1-1.066 1.075H6.066A1.07 1.07 0 0 1 5 17.485zm3.222 10.213a.79.79 0 0 1 0-1.256a4.2 4.2 0 0 1 2.566-.875c.965 0 1.855.326 2.566.875a.79.79 0 0 1 0 1.256a4.2 4.2 0 0 1-2.566.876a4.2 4.2 0 0 1-2.566-.876Zm2.564-2.884c1.096 0 1.985-1.12 1.985-2.504c0-1.382-.889-2.503-1.985-2.503S8.8 7.517 8.8 8.9s.888 2.504 1.985 2.504Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BitcoinIconsAddressBookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
