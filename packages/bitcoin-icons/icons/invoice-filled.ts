import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsInvoiceFilledIcon],svg[bitcoin-icons-invoice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 4zm6.854 4.354a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 .708.708zM11.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-5 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsInvoiceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
