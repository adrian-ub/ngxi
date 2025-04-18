import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsInvoiceOutlineIcon],svg[bitcoin-icons-invoice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="15" x="6.5" y="4.5" rx="1.5"></svg:rect><svg:path stroke-linecap="round" d="m10 12l4-4"></svg:path><svg:circle cx="10.5" cy="8.5" r=".5"></svg:circle><svg:circle cx="13.5" cy="11.5" r=".5"></svg:circle><svg:path stroke-linecap="round" d="M9 15h6m-6 2h6"></svg:path></svg:g>`,
})
export class BitcoinIconsInvoiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
