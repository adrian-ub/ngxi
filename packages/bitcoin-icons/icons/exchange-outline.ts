import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsExchangeOutlineIcon],svg[bitcoin-icons-exchange-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M17.757 7.193a7.5 7.5 0 0 0-13.108 6.303M19.3 10.274a7.5 7.5 0 0 1-13.186 6.375"></svg:path><svg:path stroke-linejoin="round" d="M18.125 5.5v2h-2m-8.25 9h-2v2"></svg:path><svg:path d="M12 8v8"></svg:path><svg:path stroke-linejoin="round" d="M13.81 10.152c-.12-.53-.803-1.12-1.804-1.12s-1.77.65-1.77 1.47c0 1.864 3.711.906 3.711 3.07c0 .781-.94 1.444-1.94 1.444s-1.694-.615-1.899-1.274"></svg:path></svg:g>`,
})
export class BitcoinIconsExchangeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
